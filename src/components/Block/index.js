import React, { useState, useRef, createRef, useEffect } from "react";

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

import { Questions, Artists } from "../../data/questions";
console.log(Questions);

// console.log(Questions[0].impressionism.questions);

const quiz = Questions[0].impressionism;

export default function Block({ status }) {
  const [select, setSelect] = useState(null);
  const [page, setPage] = useState(0);
  const [rightAnswers, setRightAnswer] = useState(0);
  const [counter, setCounter] = useState(0);

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

  const ref = useRef();

  return (
    <Container>
      <Box>
        <BoxTop>
          <Title>
            {quiz.title} {counter} .
          </Title>
        </BoxTop>
        <BoxContent>
          <Image src={quiz.questions[page].image} />
          <Options>
            {quiz.questions[page].options.map((name, key) => (
              <Option
                ref={ref}
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
