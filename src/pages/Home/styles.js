import styled from "styled-components";

export const ContainerImage = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 240px;

  div {
    background: #121417;
    width: 100px;
    height: 100px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #33d664;
    cursor: pointer;
    margin: 0 auto;
  }

  li {
    flex: 1 0 33%;
    text-align: center;
  }
`;
