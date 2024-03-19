'use client'
import { clearHistory } from '@/lib/features/history'
import { useAppSelector } from '@/lib/hooks'
import { Button } from '@blueprintjs/core'
import { useDispatch } from 'react-redux'

export default function HistoryPage() {
  const dispatch = useDispatch()
  const orders = useAppSelector((state) => state.history.orders)
  const handleClearHistory = () => {
    dispatch(clearHistory())
  }

  return (
    <main className='px-4 pb-16'>
      <h1 className='my-4 text-3xl font-bold'>Order history</h1>
      {orders.length === 0 && <div>Please place your order in menu page.</div>}
      <ul className='space-y-4'>
        {orders.map((order, index) => (
          <li key={order.timestamp} data-testid='order-detail'>
            <h3 className='mb-1 text-xl font-bold'>{`Order #${index + 1}`}</h3>
            <ul>
              {order.items.map((item) => (
                <li
                  key={item.id}
                  data-testid='order-item'
                  className='flex items-center justify-between border-b py-4'>
                  <span>{item.name}</span>
                  <span>x{item.count}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      {orders.length > 0 && (
        <div className='fixed bottom-0 w-full border-t bg-white p-4 text-center'>
          <Button onClick={handleClearHistory}>Clear history</Button>
        </div>
      )}
    </main>
  )
}
