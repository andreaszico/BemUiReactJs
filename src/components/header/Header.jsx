import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 w-full fixed z-30 top-0 shadow-md">
            <div className="flex-1 flex justify-between items-center">
                <a href="/">
                    <img src="http://bem-itdel.site/assets/images/Logo-BEM-IT-Del.png" className="w-10" alt="" srcSet="" />
                </a>
            </div>

            <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block"><svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div className="hidden lg:flex lg:items-center lg:w-auto lg:h-auto h-screen w-full font-roboto font-medium transition-all duration-500" id="menu">
                <nav>
                    <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                        <li><a className="lg:p-4 lg:pt-5 py-2 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-sm tracking-wide" href="/">Beranda</a></li>
                        <li><a className="lg:p-4 lg:pt-5 py-2 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-sm tracking-wide" href="/about">Profile</a></li>
                        <li><a className="lg:p-4 lg:pt-5 py-2 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-sm tracking-wide" href="/blog">Blog</a></li>
                        <li><a className="lg:p-4 lg:pt-5 py-2 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-sm tracking-wide" href="/kegiatan">Kegiatan</a></li>
                        <li><a className="lg:p-4 lg:pt-5 py-2 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-sm tracking-wide" href="/">Prestasi</a></li>
                        <li><a className="lg:p-4 lg:pt-5 py-2 px-0 block border-b-2 border-transparent  hover:border-indigo-400 lg:mb-0 lg:mr-5 mb-2 text-sm tracking-wide" href="/">Forum</a></li>
                        <li><Link
                            to="/login"
                            className="inline-flex justify-center lg:py-5 lg:px-6 p-3 px-8 border border-transparent shadow-sm text-sm font-semibold lg:mb-0 lg:mr-5 mb-2 uppercase text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            Login
                        </Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
