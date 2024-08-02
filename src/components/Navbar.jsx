import "../../css/Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/User";
function Navbar({ basket }) {
  const { user } = useContext(UserContext);
  return (
    <header>
      <nav>
        <ul>
          {user.avatar_url && (
            <li>
              <img id="avatar" src={user.avatar_url} />
            </li>
          )}
          <li>{user.username}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/sell"}>Sell</Link>
          </li>
          <li>
            <Link to={"/sign-up"}>Sign-up/Log-in</Link>
          </li>
          <li>Basket: {basket.length}</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
