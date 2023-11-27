import Link from "next/link";

// icons
import { BiHome, BiCompass, BiLogoDiscordAlt, BiTime, BiHelpCircle, BiLogIn } from "react-icons/bi"
import { LuLibrary, LuSettings } from "react-icons/lu"
import { HiDownload } from "react-icons/hi"
import { MdOutlineStreetview } from 'react-icons/md';

const Navbar = () => {
  return (
    <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="h-screen px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <a href="#" className="flex items-center pl-2.5 mb-5">
          <MdOutlineStreetview className='text-5xl text-green-500' />
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Monanime</span>
        </a>
        <ul className="space-y-3 pl-5">
          <p>Menu</p>
          <Link href="/" className='active flex justify-start py-1 px-2 rounded-lg items-center text-md font-normal' >
            <BiHome className='mr-2' />
            Home
          </Link>
          <Link href="/" className='flex justify-start py-1 px-2 rounded-lg items-center text-md font-normal' >
            <BiCompass className='mr-2' />
            Discovery
          </Link>
          <Link href="/" className='flex justify-start py-1 px-2 rounded-lg items-center text-md font-normal' >
            <BiLogoDiscordAlt className='mr-2' />
            Community
          </Link>
          <hr></hr>
          <p>Library</p>
          <Link href="/" className='flex justify-start py-1 px-2 rounded-lg items-center text-md font-normal' >
            <BiTime className='mr-2' />
            Recent
          </Link>
          <Link href="/" className='flex justify-start py-1 px-2 rounded-lg items-center text-md font-normal' >
            <LuLibrary className='mr-2' />
            My Collection
          </Link>
          <Link href="/" className='flex justify-start py-1 px-2 rounded-lg items-center text-md font-normal' >
            <HiDownload className='mr-2' />
            Download
          </Link>
          <hr></hr>
          <Link href="/" className='flex justify-start py-1 px-2 rounded-lg items-center text-md font-normal' >
            <LuSettings className='mr-2' />
            Setting
          </Link>
          <Link href="/" className='flex justify-start py-1 px-2 rounded-lg items-center text-md font-normal' >
            <BiHelpCircle className='mr-2' />
            Help
          </Link>
        </ul>
        <ul className="space-y-5 pl-5 flex items-end h-28">
          <Link href="/" className='flex justify-start py-1 px-2 rounded-lg items-center text-md font-normal' >
            <BiLogIn className='mr-2' />
            Sign in
          </Link>
        </ul>
      </div>
    </aside>
  )
}

export default Navbar
