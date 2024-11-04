import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'




function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();
  const pathsToHideNavbar = ['/host','/host/single'];

  const isNavbarVisible = !pathsToHideNavbar.includes(location.pathname);

  return (
    <>
      {isNavbarVisible && <Header />}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App