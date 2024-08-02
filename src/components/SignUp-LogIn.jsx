import { useState } from "react";
import "../../css/Signup.css";
import SignUp from "./SignUp";
import LogIn from "./LogIn";


export default function SignUpLogIn() {
  const [form, setForm] = useState("sign-up");

  function handleClick(e) {
    e.preventDefault();
    setForm(e.target.className);
  }

  return (
    <section className="sign-up">
      <h1>NC Marketplace</h1>
      <ul>
        <li>
          <button className="sign-up" onClick={handleClick}>
            Sign-Up
          </button>
        </li>
        <li>
          <button  className="log-in" onClick={handleClick}>
            Log-In
          </button >
        </li>
      </ul>
      {form === "sign-up" ? <SignUp /> : <LogIn />}
    </section>
  );
}
