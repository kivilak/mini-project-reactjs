import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="bg-header h-36 bg-cover bg-blend-darken font-lobster text-text-color drop-shadow-xl text-center text-header-text pt-4 tracking-widest ">Royal Bakers</div>
      <nav className="sticky h-11 bg-baker-yellow">
        <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1 font-quicksand text-text-color font-bold">
          <div className="flex flex-col">
            <ul className="flex font-semibold lg:flex-row lg:mt-0 w-full justify-between">
              <li><NavLink to="#" className={({isActive}) => `block py-2.5 pr-4 pl-3 duration-200 ${isActive ? 'bg-nav-active' : 'bg-baker-yellow'} lg:hover:bg-nav-active`}>Home</NavLink></li>
              <li><NavLink to={'/product'} className={({isActive}) => `block py-2.5 pr-4 pl-3 duration-200 ${isActive ? 'bg-nav-active' : 'bg-baker-yellow'} lg:hover:bg-nav-active`}>Product</NavLink></li>
              <li><NavLink to={'/contact'} className={({isActive}) => `block py-2.5 pr-4 pl-3 duration-200 ${isActive ? 'bg-nav-active' : 'bg-baker-yellow'} lg:hover:bg-nav-active`}>Contact</NavLink></li>
              <li><NavLink to={'/about'} className={({isActive}) => `block py-2.5 pr-4 pl-3 duration-200 ${isActive ? 'bg-nav-active' : 'bg-baker-yellow'} lg:hover:bg-nav-active`}>About</NavLink></li>
            </ul>
          </div>
          <div>
            <ul className="flex font-semibold lg:flex-row lg:mt-0 w-full justify-between">
              <li>
                <NavLink to={'/cart'} className={({isActive}) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'bg-nav-active' : 'bg-baker-yellow'} lg:hover:bg-nav-active`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                  </svg>
                </NavLink>
              </li>
              <li><NavLink to={'/login'} className={({isActive}) => `block py-2.5 pr-4 pl-3 duration-200 ${isActive ? 'bg-nav-active' : 'bg-baker-yellow'} lg:hover:bg-nav-active`}>Login</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header