import React from "react";
import Logo from "../../images/LOGO.svg";
import { useNavigate } from "react-router-dom";

import { useScore } from "../../context/Score";

// import { Container } from './styles';

export default function Header() {
  const { setScore } = useScore();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
    setScore(0);
  };

  return (
    <img onClick={() => handleGoHome()} className="logo" src={Logo} alt="" />
  );
}
