'use client'
import { Drawer } from '@blueprintjs/core'

type Props = {
  isOpen: boolean
  onClose: () => void
}
export default function CartDrawer({ isOpen = false, onClose }: Props) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <h2 className='p-4 text-3xl font-bold'>Cart</h2>
      <hr />
    </Drawer>
  )
}
