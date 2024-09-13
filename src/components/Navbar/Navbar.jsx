// eslint-disable-next-line no-unused-vars
import React from 'react';
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";
import PropTypes from 'prop-types';

// Menu links data
const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#",
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "/#",
    },
    {
        id: 4,
        name: "Mens Wear",
        link: "/#",
    },
    {
        id: 5,
        name: "Women Wears",
        link: "/#",
    },
];

// Dropdown menu links data
const DropdownLinks = [
    {
        id: 1,
        name: "Sales Products",
        link: "/#",
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#",
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#",
    },
];

const Navbar = ({ handleOrderPopup }) => {
    return (
        <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            {/* Upper Navbar */}
            <div className="bg-primary/40 py-2">
                <div className="container flex justify-between items-center">
                    <div>
                        <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                            <img src={Logo} alt="logo" className="w-10 uppercase" />
                            Shopsy
                        </a>
                    </div>

                    {/* Search bar */}
                    <div className="flex items-center justify-between gap-4">
                        <div className="group relative hidden sm:block">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
                            />
                            <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
                        </div>

                        {/* Order Button */}
                        <button
                            onClick={handleOrderPopup}
                            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white px-4 py-1 rounded-full flex items-center gap-3 group"
                        >
                            <span className="group-hover:block hidden transition-all duration-500">
                                Order
                            </span>
                            <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
                        </button>

                        {/* Dark and Light Mode */}
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>

            {/* Lower Navbar */}
            <div className="flex justify-center">
                <ul className="sm:flex hidden items-center gap-4">
                    {Menu.map((data) => (
                        <li key={data.id}>
                            <a
                                href={data.link}
                                className="inline-block px-4 py-2 hover:text-primary duration-200"
                            >
                                {data.name}
                            </a>
                        </li>
                    ))}
                    <li className="group relative cursor-pointer">
                        <a href="#" className="flex items-center gap-[2px] py-2">
                            Trending Products
                            <span>
                                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                            </span>
                        </a>
                        <div className="absolute z-[9999] hidden group-hover:block w-[150px] bg-white shadow-md rounded-md p-2 text-black">
                            <ul>
                                {DropdownLinks.map((data) => (
                                    <li key={data.id}>
                                        <a
                                            href={data.link}
                                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20 duration-200 shadow-sm"
                                        >
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

// PropTypes validation
Navbar.propTypes = {
    handleOrderPopup: PropTypes.func.isRequired,
};

export default Navbar;