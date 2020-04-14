import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
import { useScore } from "../../context/Score";

export default function Quiz() {
  const [select, setSelect] = useState(null);
  const [page, setPage] = useState(0);
  const [rightAnswers, setRightAnswer] = useState(0);
  const [sequenceQuestions, setSequenceQuestions] = useState([]);
  const [index, setIndex] = useState(1);
  const [imageSelect, setImageSelect] = useState("");

  const { score, setScore, answers, setAnswers } = useScore();

  console.log(answers);
  const { theme } = useParams();
  const quiz = Questions[theme];

  const handleSelect = (key, item) => {
    setSelect(key);
    if (item.right) {
      setRightAnswer(rightAnswers + 1);
    } else {
      setRightAnswer(0);
    }
  };

  const handleNextPage = () => {
    setScore(rightAnswers + score);
    setRightAnswer(0);
    setSelect(null);
    setIndex(index + 1);
    setPage(sequenceQuestions[index]);
    // setAnswers([...answers, { img: quiz.questions[page].image }]);
  };

  const handleSeeAnswers = () => {
    setScore(rightAnswers + score);
    navigate("/score");
  };

  const random = (num, length) => {
    var arr = [];
    while (arr.length < num) {
      var r = Math.floor(Math.random() * length) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
  };

  useEffect(() => {
    const randomNumber = random(5, quiz.questions.length - 1);
    setSequenceQuestions(randomNumber);
    setPage(randomNumber[0]);
  }, []);

  const navigate = useNavigate();

  return (
    <Container>
      <Box>
        <BoxTop>
          <Title>{theme} .</Title>
        </BoxTop>
        <BoxContent>
          <Image src={quiz.questions[page].image} />
          <Options>
            {quiz.questions[page].options.map((item, key) => (
              <Option
                key={key}
                isRight={item.right}
                status={select === key ? 1 : 0}
                onClick={() => handleSelect(key, item)}
              >
                {item.name}
              </Option>
            ))}
            {index <= 4 && select === null ? (
              <Button
                disabled={true}
                style={{ cursor: "not-allowed " }}
                onClick={() => handleNextPage()}
                empty={select}
              >
                Next
              </Button>
            ) : index > 4 && select !== null ? (
              <Button onClick={() => handleSeeAnswers()} empty={select}>
                See Answers
              </Button>
            ) : (
              <Button onClick={() => handleNextPage()} empty={select}>
                Next
              </Button>
            )}
          </Options>
        </BoxContent>
      </Box>
      )}
    </Container>
  );
}
