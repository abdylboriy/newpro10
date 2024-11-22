import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <div className='continer'>
    <div className='left-nav'>
      
      <Link to={"/home"}><p>Camper</p></Link>
        {/* <img src={logo} alt="logo-image" /> */}
    </div>
    <div className='right-nav'>
        <div className='navbar-menu'>
        <div className='Navbar-div'>
        <Link to={'/motor'}>
        <p>Motor</p>
        </Link></div>
        <div><Link to={'/caravan'}>
        <p>Carvan</p></Link></div>
        <div><Link to={"/Tuning"}><p>Tuning</p></Link></div>
        <div><Link to={"/used"}><p>Used Car</p></Link></div>
        <div><Link to={'/Camping'}><p>Camping Place</p></Link></div>
    </div>
    </div>
</div>
</>
  )
}

export default Navbar;