import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring'
import NavigationMenu from './NavigationMenu'

function Navigation() {

    // Hook for changing the state of the menu
    const [showMenu, setShowMenu] = useState(false)

    // Defining transparent background animation
    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    // Defining animation for the menu
    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    return (
        <nav>
            <span className="text-xl text-indigo-600 hover:text-indigo-900 cursor-pointer">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)} />
            </span>
            {
                maskTransitions.map(({ item, key, props }) =>
                    item &&
                    <animated.div
                        style={props}
                        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                        onClick={() => setShowMenu(false)}>
                    </animated.div>
                )
            }
            {
                menuTransitions.map(({ item, key, props }) =>
                    item &&
                    <animated.div
                        style={props}
                        className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3">
                        <NavigationMenu
                            closeMenu={() => setShowMenu(false)} />
                    </animated.div>
                )
            }
        </nav>
    )
}

export default Navigation
