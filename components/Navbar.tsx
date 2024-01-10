import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className='w-full absoulute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href="/" className='flex justify-center items-center'>
          <Image 
          alt='car hub logo' 
          src="/logo.svg" 
          width={118} 
          height={18} 
          className='object-contain'
          />
        </Link>
      </nav>
    </header>
  )
}

export default Navbar