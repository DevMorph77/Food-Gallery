import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // For hamburger icon and close icon

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="bg-blue-600 text-white py-4 ">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold mx-10">Food Gallery</h1>
                <nav className="relative">
                    {/* Hamburger Icon */}
                    <button
                        className="text-2xl sm:hidden block mx-10"
                        onClick={toggleNav}
                    >
                        {isNavOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    {/* Navigation Links Overlay */}
                    {isNavOpen && (
                        <div className="fixed inset-0 bg-blue-600 text-white flex flex-col items-center justify-center z-50">
                            <button
                                className="absolute top-4 right-4 text-2xl"
                                onClick={toggleNav}
                            >
                                <FaTimes />
                            </button>
                            <ul className="space-y-6">
                                <li><a href="#" className="hover:underline" onClick={toggleNav}>Home</a></li>
                                <li><a href="#" className="hover:underline" onClick={toggleNav}>About</a></li>
                                <li><a href="#" className="hover:underline" onClick={toggleNav}>Contact</a></li>
                            </ul>
                        </div>
                    )}

                    {/* Navigation Links for larger screens */}
                    <ul className="hidden sm:flex space-x-4 mx-10">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>

                </nav>
                {isNavOpen && (
                         <div className="fixed inset-0 bg-blue-600 bg-opacity-75 text-white flex flex-col items-center justify-center z-50">
                            <button
                                className="absolute top-4 right-4 text-2xl"
                                onClick={toggleNav}
                            >
                                <FaTimes />
                            </button>
                            <ul className="space-y-6">
                                <li><a href="#" className="hover:underline" onClick={toggleNav}>Home</a></li>
                                <li><a href="#" className="hover:underline" onClick={toggleNav}>About</a></li>
                                <li><a href="#" className="hover:underline" onClick={toggleNav}>Contact</a></li>
                            </ul>
                        </div>
                    )}

            </div>
        </header>
    );
};

export default Header;
