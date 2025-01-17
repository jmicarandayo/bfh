import React from "react";
import ReactDOM from "react-dom";

function Sidebar() {
    return (
        <>
            <div className="relative min-h-screen md:flex">
                {/* mobile menu bar */}
                <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
                    <a href="#" className="block p-4 text-white font-bold">
                        Balungao Funeral Homes
                    </a>

                    <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Sidebar */}
                <div className="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
                    <a
                        href="#"
                        className="text-white flex items-center space-x-2 px-4"
                    >
                        <span className="text-2xl font-extrabold text-center">
                            <img src="" alt="Balungao Funeral Homes Logo" />
                        </span>
                    </a>

                    <nav>
                        <hr />
                        <a
                            href="#"
                            className="font-black block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
                        >
                            Dashboard
                        </a>
                        <a
                            href=""
                            className="font-black block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
                        >
                            Products
                        </a>
                        <a
                            href=""
                            className="font-black block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
                        >
                            Categories
                        </a>
                        <a
                            href=""
                            className="font-black block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
                        >
                            Customers
                        </a>
                        <a
                            href=""
                            className="font-black block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
                        >
                            Deceased
                        </a>
                        <hr />
                        <br />
                        <a
                            href="logout"
                            className="font-black block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
                        >
                            Logout
                        </a>
                    </nav>
                </div>

                {/* <div className="flex-1 p-10 text-2xl font-bold">
                    content goes here
                </div> */}
            </div>
        </>
    );
}

export default Sidebar;

if (document.getElementById("sidebar")) {
    ReactDOM.render(<Sidebar />, document.getElementById("sidebar"));
}

// grab everything we need
const btn = document.querySelector(".mobile-menu-button");
const sidebar = document.querySelector(".sidebar");

// add our event listener for the click
btn.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
});
