import { render } from '@testing-library/react'

import HistoryPage from '../page'
import StoreProvider from '@/app/StoreProvider'

describe('history page component', () => {
  test('render page', () => {
    render(
      <StoreProvider>
        <HistoryPage />
      </StoreProvider>
    )
    expect(true).toBe(true)
  })
})
