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
import { useState } from 'react'
import CartDrawer from './CartDrawer'

export default function AppBar() {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false)

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
        <Button minimal icon='shopping-cart' text='Cart' onClick={toggleCartDrawer} />
      </NavbarGroup>
      <CartDrawer isOpen={isCartDrawerOpen} onClose={closeCartDrawer} />
    </Navbar>
  )
}
