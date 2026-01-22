import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/auth/login'
import ResponsiveLogin from './components/auth/Responsive_login'
import Auth from './pages/Auth'
import AdminPortal from './pages/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Auth/> */}
      <AdminPortal/>
    </>
  )
}

export default App
