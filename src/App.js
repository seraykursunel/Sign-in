import Image from 'next/image'
import { useState } from 'react'

// login'i ve dashboard + signout'u isAuthUser'a koşullu olarak görüntülemek için <></> fragment'ı kullanın

export default function Navbar() {
  const [isAuthUser, setIsAuthUser] = useState(false)

  const handleChange= ()=>{
    setIsAuthUser(pre=>!pre)
  }

  return (
    <header className='navbar-wrapper'>
      <nav className='navbar'>
        <Logo />
       { isAuthUser ? 
       <div className='navbar-links flex flex-col items-center'>
       <button class="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-20 gap-y-4 m-4" onClick={handleChange}> 
          <a href='#' className='navbar-link'>
            Login
          </a>
          </button> 
    </div>
          :
        <div className='navbar-links flex flex-col items-center'>
         <button class="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-20 gap-y-4 m-4" onClick={handleChange}>
         <a href='#' className='navbar-link'>
          Dashboard
          </a>
          </button> 
          <br/>
          <button class="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-20 gap-y-4 " onClick={handleChange}> 
          <a href='#' className='navbar-link'>
            Sign out
          </a>
          </button>
        </div>
}
      </nav>
    </header>
  )
}

function Logo() {
  return (
    <div className='flex lg:flex-1 justify-center'>
      <a href='#' className='m-3.5 p-1.5'>
        <Image
          className='h-8 w-auto'
          src='/mark.svg'
          alt='Tailwind Logo'
          width={500}
          height={500}
        />
      </a>
    </div>
  )
}
