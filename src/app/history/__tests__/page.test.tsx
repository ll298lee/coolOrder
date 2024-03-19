import { screen, render, within, fireEvent } from '@testing-library/react'
import { useRouter } from 'next/navigation'

import MenuPage from '../../page'
import AppLayout from '../../layout'
import HistoryPage from '../page'
import { ReactNode } from 'react'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('history page component', () => {
  let mockRouter, rerender: (ui: ReactNode) => void
  beforeEach(async () => {
    mockRouter = {
      push: jest.fn(),
    }
    ;(useRouter as jest.Mock).mockReturnValue(mockRouter)

    const renderResult = render(<MenuPage />, { wrapper: AppLayout })
    rerender = renderResult.rerender
    const menuItems = await screen.findAllByTestId('menu-item')
    const addButton = within(menuItems[0]).getByRole('button', { name: 'Add to cart' })
    fireEvent.click(addButton)
    fireEvent.click(addButton)
    fireEvent.click(addButton)

    const addButton1 = within(menuItems[1]).getByRole('button', { name: 'Add to cart' })
    fireEvent.click(addButton1)

    fireEvent.click(screen.getByTestId('cart-button'))
  })
  test('render order', () => {
    fireEvent.click(screen.getByRole('button', { name: 'Create order' }))

    rerender(<HistoryPage />)
    const firstOrderEl = screen.queryAllByTestId('order-detail')[0]

    expect(within(firstOrderEl).getByText('Order #1')).toBeInTheDocument()
    expect(within(firstOrderEl).queryAllByTestId('order-item')).toHaveLength(2)

    const firstOrderItemEl = within(firstOrderEl).queryAllByTestId('order-item')[0]
    expect(within(firstOrderItemEl).getByText('x3')).toBeInTheDocument()
  })
  test('render multiple orders', async () => {
    fireEvent.click(screen.getByRole('button', { name: 'Create order' }))
    const menuItems = await screen.findAllByTestId('menu-item')
    const addButton = within(menuItems[3]).getByRole('button', { name: 'Add to cart' })
    fireEvent.click(addButton)
    fireEvent.click(addButton)

    fireEvent.click(screen.getByTestId('cart-button'))
    fireEvent.click(screen.getByRole('button', { name: 'Create order' }))
    rerender(<HistoryPage />)
    expect(screen.queryAllByTestId('order-detail')).toHaveLength(2)
    const secondOrderEl = screen.queryAllByTestId('order-detail')[1]

    expect(within(secondOrderEl).getByText('Order #2')).toBeInTheDocument()
    expect(within(secondOrderEl).queryAllByTestId('order-item')).toHaveLength(1)

    const orderItem = within(secondOrderEl).queryAllByTestId('order-item')[0]
    expect(within(orderItem).getByText('x2')).toBeInTheDocument()
  })
  test('clear history', () => {
    fireEvent.click(screen.getByRole('button', { name: 'Create order' }))
    rerender(<HistoryPage />)
    fireEvent.click(screen.getByRole('button', { name: 'Clear history' }))
    expect(screen.queryAllByTestId('order-detail')).toHaveLength(0)
    expect(screen.getByText('Please place your order in menu page.')).toBeInTheDocument()
  })
})
