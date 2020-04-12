import React from "react";
import Logo from "../../images/LOGO.svg";
import { useNavigate } from "react-router-dom";

// import { Container } from './styles';

export default function Header() {
  const navigate = useNavigate();

  return (
    <img onClick={() => navigate("/")} className="logo" src={Logo} alt="" />
  );
}
