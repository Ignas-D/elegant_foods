import { useState, useEffect } from "react";
import logo from "../../assets/2D705227-C6D0-4C49-B48B-B94E8D4DDC7F.jpeg";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("relative");

  const stickNavbar = () => {
    if (typeof window !== "undefined") {
      let windowHeight = window.scrollY;
      windowHeight > 300
        ? setStickyClass("fixed top-0 left-0 z-50 w-full")
        : setStickyClass("relative");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  return (
    <div className={`w-full h-16 bg-secondary font ${stickyClass}`}>
      <nav className="relative">
        <ul className="flex justify-evenly items-center p-5 bg-gray-800 text-white font-firstFont text-xl">
          <li className="px-4">
            <a href="/" className="text-white">
              Home
            </a>
          </li>
          <li className="px-4">
            <a href="/about" className="text-white">
              About
            </a>
          </li>
          <li className=" relative flex justify-center">
            <div className="flex justify-center items-center absolute top-1/2 transform -translate-y-1/2 w-40 h-40 rounded-full mx-auto bg-secondary">
              <a href="/">
                <img
                  src={logo}
                  alt="catering"
                  className="w-16 h-16 rounded-3xl shadow-lg object-contain"
                ></img>
              </a>
            </div>
          </li>
          <li className="px-4">
            <a href="/menu" className="text-white">
              Menu
            </a>
          </li>
          <li className="px-4">
            <a href="/contact" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
