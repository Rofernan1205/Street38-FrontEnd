import React from "react";
import "./LoginForm.scss";
export const LoginForm = () => {
  return (
    <form className="ui form">
      <div className="field">
        <label className="roboto-bold">Email</label>
        <input placeholder="Email" />
      </div>
      <div className="field">
        <label className="roboto-bold">Password</label>
        <input placeholder="Password" type="password" />
      </div>
      <button className="ui button fluid secondary" type="submit">
        Iniciar Sesión
      </button>
    </form>
  );
};
