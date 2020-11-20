import React from 'react'
import { Link } from 'react-router-dom'

function NavigationMenu(props) {
    return (
        <div>
            <div
                className="font-bold py-3">
                Menu
            </div>
            <ul>
                <li key="home">
                    <Link
                        to="/"
                        className="text-indigo-600 hover:text-indigo-900 py-3 border-t border-b block"
                        onClick={props.closeMenu}>
                        Home
                    </Link>
                </li>
                <li key="categories">
                    <Link
                        to="/Categories"
                        className="text-indigo-600 hover:text-indigo-900 py-3 border-b block"
                        onClick={props.closeMenu}>
                        Categories
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu