import React from 'react'

export default function Aside() {
    const closeMenu =()=> {
        document.querySelector(".sidebar").classList.remove("open")
    }
    return (
        <div className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>
                   x
            </button>
            <ul>
                <li>
                    <a href="#sa">Pants</a>
                </li>
                <li>
                    <a href="#as">Shirts</a>
                </li>
            </ul>
            
        </div>
    )
}
