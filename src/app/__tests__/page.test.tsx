import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import { useRouter } from 'next/navigation'

import MenuPage from '../page'
import AppLayout from '../layout'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Menu page component', () => {
  let mockRouter
  beforeEach(() => {
    mockRouter = {
      push: jest.fn(),
    }
    ;(useRouter as jest.Mock).mockReturnValue(mockRouter)
  })
  test('render menu categories', () => {
    render(
      <AppLayout>
        <MenuPage />
      </AppLayout>
    )

    expect(screen.getByText('Appetizer')).toBeInTheDocument()
    expect(screen.getByText('Drink')).toBeInTheDocument()
    expect(screen.getByText('Dessert')).toBeInTheDocument()
  })
  describe('Cart behavior', () => {
    beforeEach(async () => {
      render(
        <AppLayout>
          <MenuPage />
        </AppLayout>
      )
      const menuItems = await screen.findAllByTestId('menu-item')
      const addButton = within(menuItems[0]).getByRole('button', { name: 'Add to cart' })
      fireEvent.click(addButton)
      fireEvent.click(screen.getByTestId('cart-button'))
    })

    test('show item and create order button in cart after clicking add button', async () => {
      const menuItems = await screen.findAllByTestId('menu-item')
      const itemName = menuItems[0].children[0].textContent || ''

      const cartItems = await screen.findAllByTestId('cart-item')
      expect(within(cartItems[0]).getByText(itemName)).toBeInTheDocument()
      expect(within(cartItems[0]).getByTestId('cart-item-count')).toHaveTextContent('1')
      expect(screen.queryByRole('button', { name: 'Create order' })).toBeInTheDocument()
    })

    test('increment item count in cart', async () => {
      const cartItems = await screen.findAllByTestId('cart-item')
      fireEvent.click(within(cartItems[0]).getByRole('button', { name: '+' }))
      expect(within(cartItems[0]).getByTestId('cart-item-count')).toHaveTextContent('2')
    })

    test('decrement item count in cart', async () => {
      const cartItems = await screen.findAllByTestId('cart-item')
      fireEvent.click(within(cartItems[0]).getByRole('button', { name: '+' }))
      fireEvent.click(within(cartItems[0]).getByRole('button', { name: '-' }))
      expect(within(cartItems[0]).getByTestId('cart-item-count')).toHaveTextContent('1')
    })

    test('remove item after clicking `-` button when count is 1', async () => {
      const cartItems = await screen.findAllByTestId('cart-item')
      fireEvent.click(within(cartItems[0]).getByRole('button', { name: '-' }))
      expect(screen.queryByTestId('cart-item')).not.toBeInTheDocument()
      expect(
        screen.queryByRole('button', { name: 'Create order' })
      ).not.toBeInTheDocument()
      expect(screen.getByText('The cart is empty.')).toBeInTheDocument()
    })

    test('clear cart after clicking `Create order` button', async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Create order' }))

      await waitFor(() => {
        expect(screen.queryByTestId('cart-item')).not.toBeInTheDocument()
      })
    })
    test('go to history page after creating order', async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Create order' }))
      await waitFor(() => {
        expect(mockRouter.push).toHaveBeenCalledWith('/history')
      })
    })
  })
})
