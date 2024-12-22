const Navbar = () => {
  return (
    <div className="w-full h-full bg-secondary font">
      <nav className="relative">
        <ul className="flex justify-evenly items-center p-5 bg-gray-800 text-white font-firstFont">
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
            <div className="absolute top-1/2 transform -translate-y-1/2 w-40 h-40 rounded-full mx-auto bg-secondary"></div>
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
