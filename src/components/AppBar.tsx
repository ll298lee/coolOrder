'use client'

import {
  Alignment,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core'

export default function AppBar() {
  return (
    <Navbar fixedToTop>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading className='font-bold'>Cool Order</NavbarHeading>
        <NavbarDivider />
      </NavbarGroup>
    </Navbar>
  )
}
