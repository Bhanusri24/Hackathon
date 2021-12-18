import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <nav>
            <li className="Nav-Link">
                    <Link to="/" >
                        Home
                    </Link>
                </li>
                <li className="Nav-Link">
                    <Link to="/participant" >
                        Participant registration
                    </Link>
                </li>
                <li className="Nav-Link">
                    <Link to="/Eventregister" >
                        Company registration
                    </Link>
                </li>
                
            </nav>
        </div>
    )
}

export default Header
