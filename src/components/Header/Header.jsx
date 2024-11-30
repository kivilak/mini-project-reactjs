import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {

  const [navOpen, setNavOpen] = useState(false)

  function dropDown() {
    setNavOpen((preState) => !preState)
    console.log(navOpen)
  }

  return (
    <header>
      <div className="bg-header h-40 drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)] bg-cover bg-blend-darken bg-black/30 font-lobster text-text-color text-center text-header-text pt-4 tracking-widest ">Royal Bakers</div>
      <nav className="sticky top-0">
        <div className="h-11 bg-baker-yellow justify-between items-center w-full md:flex lg:w-auto md:order-1 hidden font-quicksand text-text-color font-bold">
          <div className="flex flex-col">
            <ul className="flex font-semibold lg:flex-row lg:mt-0 w-full justify-between">
              <li><NavLink to={'/'} className={({ isActive }) => `block py-2.5 pr-4 pl-3 duration-200 ${isActive ? 'bg-nav-active' : 'bg-baker-yellow'} lg:hover:bg-nav-active`}>Home</NavLink></li>
              <li><NavLink to={'/product'} className={({ isActive }) => `block py-2.5 pr-4 pl-3 duration-200 ${isActive ? 'bg-nav-active' : 'bg-baker-yellow'} lg:hover:bg-nav-active`}>Product</NavLink></li>
              <li><NavLink to={'/contact'} className={({ isActive }) => `block py-2.5 pr-4 pl-3 duration-200 ${isActive ? 'bg-nav-active' : 'bg-baker-yellow'} lg:hover:bg-nav-active`}>Contact</NavLink></li>
              <li><NavLink to={'/about'} className={({ isActive }) => `block py-2.5 pr-4 pl-3 duration-200 ${isActive ? 'bg-nav-active' : 'bg-baker-yellow'} lg:hover:bg-nav-active`}>About</NavLink></li>
            </ul>
          </div>
          <div>
            <ul className="flex font-semibold lg:flex-row lg:mt-0 w-full justify-between">
              <li>
                <NavLink to={'/cart'} className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'bg-nav-active' : 'bg-baker-yellow'} lg:hover:bg-nav-active`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                </NavLink>
              </li>
              <li><NavLink to={'/login'} className={({ isActive }) => `block py-2.5 pr-4 pl-3 duration-200 ${isActive ? 'bg-nav-active' : 'bg-baker-yellow'} lg:hover:bg-nav-active`}>Login</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="md:hidden h-11 bg-baker-yellow text-center text-white">
          <button onClick={dropDown} className="pt-2">
            {
              navOpen === false ?
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
            }
          </button>
          <div className={`md:hidden flex flex-col transition-transform duration-1000 z-30 relative`}>
            <ul className={`md:hidden bg-baker-yellow ${navOpen === true ? "block" : 'sm:hidden hidden'}`}>
              <li><NavLink to={'/'} className={({ isActive }) => `block py-2.5 pr-4 pl-3 duration-200 ${isActive ? 'bg-nav-active' : 'bg-baker-yellow'} lg:hover:bg-nav-active`}>Home</NavLink></li>
              <li><NavLink to={'/product'} className={({ isActive }) => `block py-2.5 pr-4 pl-3 duration-200 ${isActive ? 'bg-nav-active' : 'bg-baker-yellow'} lg:hover:bg-nav-active`}>Product</NavLink></li>
              <li><NavLink to={'/contact'} className={({ isActive }) => `block py-2.5 pr-4 pl-3 duration-200 ${isActive ? 'bg-nav-active' : 'bg-baker-yellow'} lg:hover:bg-nav-active`}>Contact</NavLink></li>
              <li><NavLink to={'/about'} className={({ isActive }) => `block py-2.5 pr-4 pl-3 duration-200 ${isActive ? 'bg-nav-active' : 'bg-baker-yellow'} lg:hover:bg-nav-active`}>About</NavLink></li>
              <li>
                <NavLink to={'/cart'} className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'bg-nav-active' : 'bg-baker-yellow'} lg:hover:bg-nav-active justify-items-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                </NavLink>
              </li>
              <li><NavLink to={'/login'} className={({ isActive }) => `block py-2.5 pr-4 pl-3 duration-200 ${isActive ? 'bg-nav-active' : 'bg-baker-yellow'} lg:hover:bg-nav-active`}>Login</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </header >
  )
}

export default Header