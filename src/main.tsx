import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LayoutMain } from './components/Layouts/LayoutMain.tsx'
import Home from './pages/Home/Home.tsx'
import { CartProvider } from './context/CartProvider.tsx'
import Checkout from './pages/Checkout/Checkout.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import Login from './pages/Login/Login.tsx'
import Dashboard from './pages/Dashboard/Dashboard.tsx'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      { index: true, element: <Home /> },
      { path: "/checkout", element: <Checkout /> }
    ]
  },
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        {/* <App /> */}
        <RouterProvider router={router} />
      </CartProvider>
    </QueryClientProvider>
  </StrictMode>,
)
