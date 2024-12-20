const Navbar = () => {
  return (
    <div className="w-full h-full bg-secondary">
      <nav>
        <ul className="flex justify-between items-center p-5 bg-gray-800 text-white">
          <li>
            <a href="/" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="/order" className="text-white">
              Order
            </a>
          </li>
          <li>
            <a href="/menu" className="text-white">
              Menu
            </a>
          </li>
          <li>
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
