import "../../css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar({basket}) {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/sell"}>Sell</Link></li>
          <li>Signup</li>
          <li>Basket: {basket.length}</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
