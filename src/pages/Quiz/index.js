import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  Container,
  Box,
  BoxTop,
  BoxContent,
  Image,
  Options,
  Option,
  Button,
  Title,
} from "./styles";

import { Questions } from "../../data/questions";

export default function Quiz({ status }) {
  const [select, setSelect] = useState(null);
  const [page, setPage] = useState(0);
  const [rightAnswers, setRightAnswer] = useState(0);
  const [counter, setCounter] = useState(0);

  const { theme } = useParams();
  const quiz = Questions[theme];

  console.log(quiz.questions.length);

  const handleSelect = (key, name) => {
    setSelect(key);
    if (name.right) {
      setRightAnswer(rightAnswers + 1);
    } else {
      setRightAnswer(0);
    }
  };

  const handleNextPage = () => {
    setCounter(rightAnswers + counter);
    setRightAnswer(0);
    setSelect(null);
    setPage(page + 1);
  };

  // Generate Random Numbers

  const randomArray = (length, max) =>
    Array(length)
      .fill()
      .map(() => Math.round(Math.random() * max));

  useEffect(() => {
    const randomNumber = randomArray(5, quiz.questions.length);
    console.log(randomNumber);
  }, [quiz.questions.length]);

  return (
    <Container>
      <Box>
        <BoxTop>
          <Title>
            {theme} {counter} .
          </Title>
        </BoxTop>
        <BoxContent>
          <Image src={quiz.questions[page].image} />
          <Options>
            {quiz.questions[page].options.map((name, key) => (
              <Option
                key={key}
                isRight={name.right}
                status={select === key ? 1 : 0}
                onClick={() => handleSelect(key, name)}
              >
                {name.name}
              </Option>
            ))}
            {page <= 2 ? (
              <Button onClick={() => handleNextPage()} empty={select}>
                Next
              </Button>
            ) : (
              <Button onClick={() => handleNextPage()} empty={select}>
                See Answers
              </Button>
            )}
          </Options>
        </BoxContent>
      </Box>
    </Container>
  );
}
