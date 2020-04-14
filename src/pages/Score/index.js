import React from "react";
import { useNavigate } from "react-router-dom";
import { useScore } from "../../context/Score";

import { ContainerImage, ContainerScore, StyledLink } from "./styles";

import Block from "../../components/Block";

import low from "../../images/score/low.svg";
import medium from "../../images/score/medium.svg";
import high from "../../images/score/high.svg";

export default function Score() {
  const { score, answers } = useScore();

  return (
    <Block
      titulo="Score ."
      content={
        <ContainerImage>
          {answers.map((item) => (
            <img src={item.img} alt={item.title} />
          ))}
          {score <= 2 ? (
            <ContainerScore>
              <img src={low} alt="score" />
              <h3>You scored {score}/5!</h3>
              <span>Hm, Look on the bright side you seems a nice person!</span>
            </ContainerScore>
          ) : score === 3 ? (
            <ContainerScore>
              <img src={medium} alt="score" />
              <h3>You scored {score}/5!</h3>
              <span>Good job! Keep pairing Mx Picasso :D</span>
            </ContainerScore>
          ) : (
            <ContainerScore>
              <img src={high} alt="score" />
              <h3>You scored {score}/5!</h3>
              <span>Congratulations! You are almost a piece of art :D</span>
            </ContainerScore>
          )}
          <StyledLink to={"/"}>Back to Home</StyledLink>
        </ContainerImage>
      }
    />
  );
}
