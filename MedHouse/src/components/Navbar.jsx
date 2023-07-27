import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/reservations">RESERVATIONS</Link>
        </li>
        <li>
            <Link to="/services">SERVICES</Link>
        </li>
        <li>
            <Link to="/checkout">CHECKOUT</Link>
        </li>
        <li>
            <Link to="/about">ABOUT US</Link>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;