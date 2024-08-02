import { getUserByUsername, getUserIdByUsername } from "../../api";
import { useState, useContext } from "react";
import { UserContext } from "../context/User";
import { useNavigate } from "react-router-dom";
export default function LogIn() {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState("");
  const { setUser } = useContext(UserContext);
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    getUserByUsername(inputValue)
      .then((response) => {
        setUser(response);
      })
      .then(() => {
       return getUserIdByUsername(inputValue)
      })
      .then((response) => {
        setUser((currUser) => {
          return {...currUser, user_id: response }
        })
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <form onSubmit={handleSubmit} className="log-in">
      <label onChange={handleChange} htmlFor="username-input">
        Username:
        <input id="username-input"></input>
      </label>
      <button>Go</button>
    </form>
  );
}
