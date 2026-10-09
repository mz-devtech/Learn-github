import React from 'react'

const Navbar = () => {
    return (
            <>
                <nav className="navbar">
                    <div className="navbar__logo">
                        <h1>Learn Git</h1>
                    </div>
                    <ul className="navbar__links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Login</a></li>

                    </ul>
                </nav>
            
            
            </>
    )
}

export default Navbar
