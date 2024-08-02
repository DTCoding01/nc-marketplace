import { useContext, useState } from "react";
import { UserContext } from "../context/User";
import { postUser } from "../../api.js";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [inputValues, setInputValues] = useState({
    username: "",
    avatar_url: "",
  });
  function handleChange(e) {
    setInputValues({ ...inputValues, [e.target.id]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    postUser(inputValues)
      .then((response) => {
        setUser(response);
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <form onSubmit={handleSubmit} className="sign-up">
      <label htmlFor="username">
        Username:
        <input onChange={handleChange} id="username"></input>
      </label>
      <label htmlFor="avatar_url">
        Avatar URL:
        <input onChange={handleChange} id="avatar_url"></input>
      </label>
      <button>Go</button>
    </form>
  );
}
