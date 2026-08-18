import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Shop from './pages/Shop'
import About from './pages/About'
import CartDrawer from './components/layout/CartDrawer'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductView from './pages/ProductView';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
     <Route path='/' element={<Dashboard/>} />
     <Route path='/shop' element={<Shop />} />
     <Route path='/about' element={<About />} />
     <Route path='/login' element={<Login />} />
     <Route path='/register' element={<Register />} />
     <Route path="/product/:id" element={<ProductView />} />
    </Routes>

    <CartDrawer />
</>
  )
}

export default App
