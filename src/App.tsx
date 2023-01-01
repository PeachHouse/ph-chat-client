import { FC } from 'react'
import { AppRoutes } from '@/routes'
import { AppProvider } from './providers/App'

export const App: FC = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}
