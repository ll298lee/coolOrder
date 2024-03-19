'use client'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { Button, Drawer } from '@blueprintjs/core'
import CartItem from './CartItem'
import { clearCart } from '@/lib/features/cart'
import { useRouter } from 'next/navigation'
import { createOrder } from '@/lib/features/history'

type Props = {
  isOpen: boolean
  onClose: () => void
}
export default function CartDrawer({ isOpen = false, onClose }: Props) {
  const cartItems = useAppSelector((state) => state.cart.items)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const handleCreateOrder = () => {
    dispatch(createOrder(cartItems))
    dispatch(clearCart())
    onClose()
    router.push('/history')
  }

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <h2 className='p-4 text-3xl font-bold'>Cart</h2>
      <hr />
      <div className='flex h-full flex-col'>
        {cartItems.length === 0 ? (
          <div className='p-4'>The cart is empty.</div>
        ) : (
          <>
            <div className='relative flex-1'>
              <div className='absolute size-full overflow-auto'>
                <ul>
                  {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                  ))}
                </ul>
              </div>
            </div>
            <div className='border-t bg-white p-4 text-center'>
              <Button onClick={handleCreateOrder}>Create order</Button>
            </div>
          </>
        )}
      </div>
    </Drawer>
  )
}
