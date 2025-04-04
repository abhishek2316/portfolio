import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='w-full pt-5 bg-pink-500 pb-5'>
            <nav className='w-full flex items-center justify-between'> 
                <a href="/" className="text-light-black uppercase text-lg">
                    Abhishek Kumar
                </a>
                <div className='flex items-center gap-6'>
                    <a href="/#work-experience">Work Experience</a>
                    <a href="/#projects">Projects</a>
                    <a href="/#contact">Contact</a>
                </div>
                {/* <ul>
                    <li><a href="/work-experience">Work Experience</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul> */}
            </nav>
    </header>
  )
}

export default Header