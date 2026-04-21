import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Helper to close menu on link click (for mobile)
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="bg-[#1d03035a] border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <Link to="/#" className="text-white font-bold text-xl">
                            NB
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <ul className="flex space-x-8 items-center text-white">
                            <li className="hover:text-gray-300 transition-colors">
                                <Link smooth to="/#">Home</Link>
                            </li>
                            <li className="hover:text-gray-300 transition-colors">
                                <Link smooth to="#AboutMe">About</Link>
                            </li>
                            <li className="hover:text-gray-300 transition-colors">
                                <Link smooth to="#Experience">Experience</Link>
                            </li>
                            <li className="hover:text-gray-300 transition-colors">
                                <Link smooth to="#Education">Educations</Link>
                            </li>
                            <li className="hover:text-gray-300 transition-colors">
                                <Link smooth to="#Ourprojects">Our Projects</Link>
                            </li>
                            <li className="hover:text-gray-300 transition-colors">
                                <Link smooth to="#Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-gray-300 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-slate-100`}>
                <ul className="px-2 pt-2 pb-3 space-y-1">
                    <li>
                        <Link smooth to="/#" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-[black] hover:bg-slate-100 hover:text-red">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link smooth to="#AboutMe" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-[black] hover:bg-slate-100 hover:text-red">
                            About
                        </Link>
                    </li>

                    <li>
                        <Link smooth to="#Experience" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-[black] hover:bg-slate-100 hover:text-red">
                            Experience
                        </Link>
                    </li>


                    <li>
                        <Link smooth to="#Education" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-[black] hover:bg-slate-100 hover:text-red">
                            Educations
                        </Link>
                    </li>

                    <li>
                        <Link smooth to="#Ourprojects" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-[black] hover:bg-slate-100 hover:text-red">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link smooth to="#Contact" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-[black] hover:bg-slate-100 hover:text-red">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;