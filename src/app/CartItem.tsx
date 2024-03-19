import { CartItem, addItem, removeItem } from '@/lib/features/cart'
import { useAppDispatch } from '@/lib/hooks'
import { Button } from '@blueprintjs/core'

export default function CartItem({ cartItem }: { cartItem: CartItem }) {
  const dispatch = useAppDispatch()
  const increment = () => {
    dispatch(addItem(cartItem))
  }
  const decrement = () => {
    dispatch(removeItem(cartItem))
  }
  return (
    <li className='flex items-center justify-between border-b p-4 '>
      <div>{cartItem.name}</div>
      <div className='flex items-center gap-3'>
        <Button onClick={decrement}>-</Button>
        <div className='w-6 text-center'>{cartItem.count}</div>
        <Button onClick={increment}>+</Button>
      </div>
    </li>
  )
}
