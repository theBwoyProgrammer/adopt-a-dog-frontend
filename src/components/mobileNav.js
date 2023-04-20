import { useState } from 'react';
import Link from 'next/link';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-gray-900 text-white">
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <Link href="/" className="text-lg font-bold">Ho</Link>
        </div>
        <div className="flex md:hidden">
          <button className="text-gray-500 hover:text-white focus:outline-none focus:text-white" onClick={toggleMenu}>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-800 focus:outline-none focus:text-white focus:bg-gray-700">Howlers</Link>
            <Link href="/foundationWolves" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 mt-1">Foundation Wolves</Link>
            <Link href="/availablePuppies" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 mt-1">Available Puppies</Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 mt-1">About</Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 bg-white hover:bg-gray-100 focus:outline-none focus:text-white focus:bg-gray-700 mt-1">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default MobileNav;
