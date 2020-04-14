import styled from "styled-components";

export const ContainerImage = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 240px;
  width: 300px;
  margin: 0 auto;

  div {
    background: #121417;
    width: 100px;
    height: 100px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto 0.5em;
    transition: all 0.5s;
  }

  div:hover {
    border: 1px solid #33d664;
  }

  span {
    color: #8695a2;
  }

  li {
    flex: 1 0 50%;
    text-align: center;
    margin-bottom: 0.8em;
  }
`;
