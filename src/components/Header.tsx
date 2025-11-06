
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../utils/navigation';

const NavLink: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => {
    return (
        <Link
            to={to}
            onClick={onClick}
            className="text-gray-700 hover:text-gray-900 relative group py-2"
        >
            <span>{children}</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
        </Link>
    );
};

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const navigate = useNavigate();
    const isProfilePage = location.pathname === '/shafali' || location.pathname === '/anisha';

    const controlNavbar = () => {
        if (window.scrollY > 100 && window.scrollY > lastScrollY) {
            setIsHeaderVisible(false);
        } else {
            setIsHeaderVisible(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeMenus = () => {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
    }

    useEffect(() => {
        closeMenus();
    }, [location]);
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);


    return (
        <header className={`fixed w-full z-50 transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="bg-cream/95 backdrop-blur-sm rounded-b-[15px]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex-shrink-0">
                            <Link
                                to="/"
                                onClick={(e) => {
                                    // prevent default to control navigation + smooth scroll
                                    e.preventDefault();
                                    closeMenus();
                                    navigate('/');
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="text-3xl font-bold text-gray-900"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                McSisters
                            </Link>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <div className="relative" ref={dropdownRef}>
                                <button onClick={toggleDropdown} className="text-gray-700 hover:text-gray-900 relative group py-2 flex items-center">
                                    <span>Profiles</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute mt-2 w-48 bg-cream rounded-md shadow-lg py-1 z-20">
                                        <Link to="/shafali" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Shafali Shown-Keen</Link>
                                        <Link to="/anisha" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Anisha Sharma</Link>
                                    </div>
                                )}
                            </div>
                            <button 
                                onClick={() => scrollToSection('podcast', navigate, location.pathname)}
                                className="text-gray-700 hover:text-gray-900 relative group py-2">
                                <span>Podcast</span>
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                            </button>
                            <button 
                                onClick={() => scrollToSection('gallery', navigate, location.pathname)}
                                className="text-gray-700 hover:text-gray-900 relative group py-2">
                                <span>Gallery</span>
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                            </button>
                        </nav>
                        <div className="md:hidden">
                            <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-cream/95 rounded-b-[15px]">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                            <NavLink to="/shafali" onClick={closeMenus}>Shafali Shown-Keen</NavLink>
                            <NavLink to="/anisha" onClick={closeMenus}>Anisha Sharma</NavLink>
                            <button 
                                onClick={() => {
                                    closeMenus();
                                    scrollToSection('podcast', navigate, location.pathname);
                                }} 
                                className="text-gray-700 hover:text-gray-900 relative group py-2 w-full">
                                Podcast
                            </button>
                            <button 
                                onClick={() => {
                                    closeMenus();
                                    scrollToSection('gallery', navigate, location.pathname);
                                }} 
                                className="text-gray-700 hover:text-gray-900 relative group py-2 w-full">
                                Gallery
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;