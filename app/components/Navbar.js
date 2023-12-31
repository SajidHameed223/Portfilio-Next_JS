import React from 'react'
import Link from 'next/link'
import Logo from './Logo'

const CustomLink = (href, title, className = "") => {
    <Link href={href} className={`${className}`}>
        {title}
    </Link>


}


function Navbar() {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
                <CustomLink href='/' title="Home" className='mr-4' />
                <CustomLink href='/about' title="About" className='mx-4' />
                <CustomLink href='/projects' title="Projects" className='mx-4' />
                <CustomLink href='/articles' title="Articles" className='ml-4' />
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
            <nav>
                <Link href='/Home' target={'blank'}>
                    T
                </Link>
                <Link href='/about' target={'blank'}>
                    S
                </Link>
                <Link href='/projects' target={'blank'}>
                    Projects
                </Link>
                <Link href='/articles' target={'blank'}>
                    Articles
                </Link>
            </nav>
        </header>
    )
}

export default Navbar