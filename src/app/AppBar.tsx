'use client'

import {
  Alignment,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  AnchorButton,
  Button,
} from '@blueprintjs/core'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import CartDrawer from './CartDrawer'
import { useAppSelector } from '@/lib/hooks'

export default function AppBar() {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false)
  const cartItems = useAppSelector((state) => state.cart.items)
  const count = useMemo(() => {
    return cartItems.reduce((accu, item) => {
      return accu + item.count
    }, 0)
  }, [cartItems])

  const toggleCartDrawer = () => {
    setIsCartDrawerOpen((prev) => !prev)
  }
  const closeCartDrawer = () => {
    setIsCartDrawerOpen(false)
  }
  return (
    <Navbar fixedToTop>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading className='font-bold'>Cool Order</NavbarHeading>
        <NavbarDivider />

        <Link href='/' legacyBehavior passHref>
          <AnchorButton className='mr-2' minimal icon='list-detail-view' text='Menu' />
        </Link>
        <Link href='/history' legacyBehavior passHref>
          <AnchorButton minimal icon='history' text='History' />
        </Link>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <div className='relative'>
          <Button
            minimal
            icon='shopping-cart'
            text='Cart'
            onClick={toggleCartDrawer}
            data-testid='cart-button'
          />
          {count > 0 && (
            <div className='fixed right-2 top-2 flex min-w-[20px] items-center justify-center rounded-full bg-red-500 p-[2px] text-xs text-white'>
              {count}
            </div>
          )}
        </div>
      </NavbarGroup>
      <CartDrawer isOpen={isCartDrawerOpen} onClose={closeCartDrawer} />
    </Navbar>
  )
}
