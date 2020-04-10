import React, { useState, useEffect } from "react";

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

console.log(Questions[0].impressionism.questions);

const quiz = Questions[0].impressionism;

export default function Block({ status }) {
  const [select, setSelect] = useState(null);

  const handleSelect = (key) => {
    setSelect(key);
  };

  // useEffect(() => {
  //   console.log(select);
  // }, [select]);

  return (
    <Container>
      <Box>
        <BoxTop>
          <Title>{quiz.title} .</Title>
        </BoxTop>
        <BoxContent>
          <Image src={quiz.questions.image} />
          <Options>
            {quiz.questions.options.map((name, key) => (
              <Option
                key={key}
                status={select === key ? 1 : 0}
                onClick={() => handleSelect(key)}
              >
                {name.name}
              </Option>
            ))}
            <Button empty={select}>Next</Button>
          </Options>
        </BoxContent>
      </Box>
    </Container>
  );
}
