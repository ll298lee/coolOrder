'use client'

import { useAppSelector } from '@/lib/hooks'
import groupBy from 'lodash-es/groupBy'
import MenuItem from './MenuItem'

export default function Home() {
  const menuItems = useAppSelector((state) => state.menu.items)
  const groupedItems = groupBy(menuItems, ({ category }) => category)

  return (
    <main className='px-4 pb-8'>
      <h1 className='my-4 text-3xl font-bold'>Menu</h1>
      <ul className='space-y-4'>
        {Object.keys(groupedItems).map((category) => (
          <li key={category}>
            <h3 className='mb-1 text-xl font-bold'>{category}</h3>
            <ul>
              {groupedItems[category].map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  )
}
