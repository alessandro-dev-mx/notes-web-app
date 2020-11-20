import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <header className="border-b p-3 flex justify-between items-center">
            <Link to="/" className="font-bold text-indigo-600 hover:text-indigo-900">
                NotesApp
            </Link>
            <Navigation />
        </header>
    )
}

export default Header
