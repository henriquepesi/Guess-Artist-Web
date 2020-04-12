import React from "react";
import { useNavigate } from "react-router-dom";

import { ContainerImage } from "./styles";

import Block from "../../components/Block";

import Cubism from "../../images/cubism.svg";

export default function Home() {
  const themes = [
    {
      slug: "impressionism",
      title: "impressionism",
      img: "huahus",
    },
    {
      slug: "cubism",
      title: "cubism",
      img: "huahus",
    },
    {
      slug: "pop-art",
      title: "Pop Art",
      img: "huahus",
    },
    {
      title: "Surrealism",
      img: "huahus",
    },
    {
      title: "Pop Art",
      img: "huahus",
    },
    {
      title: "Surrealism",
      img: "huahus",
    },
  ];

  const navigate = useNavigate();

  return (
    <Block
      titulo={"oi"}
      content={
        <ContainerImage>
          {themes.map((item) => (
            <li onClick={() => navigate(`/quiz/${item.title}`)}>
              <div>
                <img src={Cubism} alt={item.title} />
              </div>
              <span>{item.title}</span>
            </li>
          ))}
        </ContainerImage>
      }
    />
  );
}
