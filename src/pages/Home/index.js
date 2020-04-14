import React from "react";
import { useNavigate } from "react-router-dom";

import { ContainerImage } from "./styles";

import Block from "../../components/Block";

import Cubism from "../../images/cubism.svg";

import { Themes } from "../../data/questions";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Block
      titulo={"oi"}
      content={
        <ContainerImage>
          {Themes.map((item) => (
            <li onClick={() => navigate(`/quiz/${item.slug}`)}>
              <div>
                <img src={item.img} alt={item.title} />
              </div>
              <span>{item.title}</span>
            </li>
          ))}
        </ContainerImage>
      }
    />
  );
}
