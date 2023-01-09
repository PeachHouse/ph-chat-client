import { FC } from 'react'
import { GlobalStyle } from '@/styles/GlobalStyle'

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}
