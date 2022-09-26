import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className='container mx-auto px-3 md:px-20 lg:px-36'>
            <nav className='flex justify-between items-center py-8 text-slate-900 font-mono'>
                <h3 className='font-bold text-xl'>
                    <Link href="/">
                        <a>Syafiqrzf.me</a>
                    </Link>
                </h3>
                <ul className="flex">
                    <li className='mx-2'>
                        <Link href="/components/About"><a>About</a></Link>
                    </li>
                    <li className='mx-2'>
                        <Link href="https://github.com/Syafiq1331?tab=repositories"><a>Projects</a></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header