import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <ul>
                    <li> <Link to='/cars'>Cars </Link> </li>
                    <li> <Link to='/create-car'>Add Cars </Link> </li>

                </ul>
            </nav>
        </header>
    )
}

export default Header