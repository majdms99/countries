import React, { useContext } from 'react'
import { BsMoon, BsMoonFill } from "react-icons/bs";
import { AllStateConext } from '../../Context/AllStatue';
import './Navbar.css'

const Navbar = () => {

  const { dark, setDark } = useContext(AllStateConext);

  const ChangeMode = () => {
    setDark(!dark)
  }
  return (
    <nav className={dark ? 'nav-dark' : 'nav-light'}>
      <div className='nav-container'>
        <h3>Wehre in the World? </h3>
        <div className='icon' onClick={ChangeMode}>
          {
            dark ? <BsMoonFill size={16} /> : <BsMoon size={16} />
          }
          <span>Dark Mode</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar