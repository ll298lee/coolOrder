import { addItem } from '@/lib/features/cart'
import { Dish } from '@/lib/features/menu'
import { useAppDispatch } from '@/lib/hooks'
import { Button } from '@blueprintjs/core'

export default function MenuItem({ item }: { item: Dish }) {
  const dispatch = useAppDispatch()
  const addToCart = () => {
    dispatch(addItem(item))
  }
  return (
    <li
      className='flex items-center justify-between border-b py-4'
      data-testid='menu-item'>
      <span>{item.name}</span>
      <Button onClick={addToCart}>Add to cart</Button>
    </li>
  )
}
