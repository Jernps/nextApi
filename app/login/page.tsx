"use client";
import React from "react";
import { useFormState } from "react-dom";
import "./style.css";
import { login } from "./action";

const page = () => {
  const initState = { message: "" };
  const [state, formAction] = useFormState(login, initState);
  return (
    <div className="card">
      <form action={formAction}>
        Email : <input type="text" name="email" />
        <br></br>
        Password : <input type="password" name="password" />
        <br></br>
        <button>Login</button>
      </form>
      Message : {state.message}
    </div>
  );
};

export default page;
