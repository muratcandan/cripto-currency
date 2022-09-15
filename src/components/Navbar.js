import React from 'react'
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <h1> <span className='orange'>Kripto</span><span className='dark'>Yatırım</span></h1>
            </div>
        </Link>
    )
}

export default Navbar
