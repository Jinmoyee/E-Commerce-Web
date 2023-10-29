import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <header className='bg-slate-300 flex justify-around px-4 py-3 text-base sm:text-lg'>
            <Link to="/">
                <h1 className='text-base sm:text-lg text-slate-500 py-1'>X<span className='text-xl sm:text-2xl text-slate-900'>Estate</span></h1>
            </Link>
            <form className='relative pt-1 sm:pt-0'>
                <input className='bg-slate-100 text-slate-600 px-2 pr-8 py-1 w-40 sm:w-60 sm:px-4 sm:pr-9 sm:py-2 rounded-lg foucus: outline-none' type="text" placeholder='Search...' />
                <FontAwesomeIcon className="absolute top-3 right-3 cl sm:top-3 text-slate-600" icon={faMagnifyingGlass} />
            </form>
            <form className='flex flex-row gap-x-2'>
                <ul className='flex gap-x-6 py-2'>
                    <Link to='/'>
                        <li className='hidden sm:inline hover:underline'>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className='hidden sm:inline hover:underline'>About</li>
                    </Link>
                    <Link to='/signIn'>
                        <li className='hover:underline'>Sign In</li>
                    </Link>
                </ul>
            </form>
        </header>
    );
}
