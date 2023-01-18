import { LoginPage } from '@/pages/Login'
import { SignupPage } from '@/pages/Signup'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const ROUTING_PATH = {
  LOGIN: '/login',
  SIGNUP: '/signup'
}

const router = createBrowserRouter([
  {
    path: ROUTING_PATH.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTING_PATH.SIGNUP,
    element: <SignupPage />,
  }
])

export const AppRoutes = () => {
  return <RouterProvider router={router} />
}
