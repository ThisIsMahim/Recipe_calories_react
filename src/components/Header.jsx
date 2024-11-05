/* eslint-disable react/no-unknown-property */
import { useState, useEffect, useRef } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Header = ({ scrollIntoMain }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => setMenuOpen(!menuOpen);
  const inputRef = useRef(null);
  // toggling theme functionality
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    console.log("theme btn");
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div>
      <div className="navbar justify-between bg-base-100 font-lexend">
        {" "}
        <div className="lg:hidden flex relative text-2xl">
          <div onClick={openMenu} className="z-10 cursor-pointer">
            {menuOpen ? <IoClose /> : <CiMenuBurger />}
          </div>
          {menuOpen && (
            <div className="absolute bg-white bg-opacity-90 top-0 left-0 p-5 rounded-lg">
              <ul className="flex flex-col gap-3 text-[#150b2bb2] dark:text-gray-300">
                <li>
                  <a className="cursor-pointer hover:text-[#150b2b] text-[16px]">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer hover:text-[#150b2b] text-[16px]"
                    onClick={scrollIntoMain}
                  >
                    Recipes
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer hover:text-[#150b2b] text-[16px]">
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer hover:text-[#150b2b] dark:text-gray-300 text-[16px]"
                    onClick={() => inputRef.current.focus()}
                  >
                    Search
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="">
          <a className="btn btn-ghost text-2xl text-[#150b2b] dark:text-white font-bold p-0">
            Recipe Calories
          </a>
        </div>
        <div className="">
          <ul className="lg:flex hidden gap-3 text-[#150b2bb2] dark:text-gray-300">
            <li>
              <a className="cursor-pointer hover:text-[#150b2b] text-[16px]">
                Home
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-[#150b2b] text-[16px]"
                onClick={scrollIntoMain}
              >
                Recipes
              </a>
            </li>
            <li>
              <a className="cursor-pointer hover:text-[#150b2b] text-[16px]">
                About
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-[#150b2b] dark:text-gray-300 text-[16px]"
                onClick={() => inputRef.current.focus()}
              >
                Search
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control hidden md:block ">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>

          <div>
            <button
              onClick={toggleTheme}
              className="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                className="fill-violet-700 block dark:hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg
                className="fill-yellow-500 hidden dark:block"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" rx="24" fill="#0BE58A" />
                  <path
                    d="M31.9761 32.9668C31.0444 31.7333 29.8391 30.7329 28.455 30.0446C27.0709 29.3562 25.5459 28.9987 24.0001 29.0001C22.4543 28.9987 20.9292 29.3562 19.5451 30.0446C18.1611 30.7329 16.9557 31.7333 16.0241 32.9668M31.9761 32.9668C33.7941 31.3497 35.0762 29.2182 35.655 26.8549C36.2337 24.4916 36.0804 22.0082 35.2153 19.7341C34.3503 17.4599 32.8144 15.5025 30.8113 14.1213C28.8081 12.7401 26.4325 12.0005 23.9994 12.0005C21.5663 12.0005 19.1906 12.7401 17.1875 14.1213C15.1844 15.5025 13.6485 17.4599 12.7834 19.7341C11.9184 22.0082 11.7651 24.4916 12.3438 26.8549C12.9226 29.2182 14.2061 31.3497 16.0241 32.9668M31.9761 32.9668C29.7814 34.9243 26.9409 36.0043 24.0001 36.0001C21.0588 36.0046 18.219 34.9246 16.0241 32.9668M28.0001 21.0001C28.0001 22.061 27.5786 23.0784 26.8285 23.8285C26.0783 24.5787 25.0609 25.0001 24.0001 25.0001C22.9392 25.0001 21.9218 24.5787 21.1716 23.8285C20.4215 23.0784 20.0001 22.061 20.0001 21.0001C20.0001 19.9392 20.4215 18.9218 21.1716 18.1717C21.9218 17.4215 22.9392 17.0001 24.0001 17.0001C25.0609 17.0001 26.0783 17.4215 26.8285 18.1717C27.5786 18.9218 28.0001 19.9392 28.0001 21.0001Z"
                    stroke="#150B2B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
