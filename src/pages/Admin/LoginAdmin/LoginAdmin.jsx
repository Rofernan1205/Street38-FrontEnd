import React from "react";
import "./LoginAdmin.scss";
import { LoginForm } from "../../../components/Admin";
export const LoginAdmin = () => {
  return (
    <div className="login-admin">
      <div className="content">
        <h1 className="bebas-neue-regular-titulo">Entrar al panel</h1>
        <LoginForm />
      </div>
    </div>
  );
};
