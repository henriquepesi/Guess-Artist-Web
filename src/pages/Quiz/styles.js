import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Box = styled.div`
  width: 600px;
  height: 350px;
  background: #1a2029;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 4px 15px 4px rgba(0, 0, 0, 0.39);
`;

export const BoxTop = styled.div`
  width: 100%;
  height: 50px;
  background: #33d664;
  position: relative;
`;

export const Title = styled.h3`
  position: absolute;
  bottom: -1px;
  left: 0.8em;
  font-size: 2.2em;
  color: #1a1f28;
  font-weight: 500;
`;

export const BoxContent = styled.div`
  padding: 2em;
  display: flex;
`;

export const Image = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
`;

export const Options = styled.ul`
  padding-left: 2em;
  list-style: none;
  flex: 1;

  /* li {
    color: ${(props) => (props.status === 0 ? "#fff" : "#33d664")};
    opacity: ${(props) => (props.available ? 0.6 : 1)};
    background: ${(props) => (props.status ? "#33d664" : "transparent")};
    border: 1px solid #33d664;
    border-radius: 15px;
    padding: 0.8em 1em 0.8em 2.5em;
    font-size: 0.8em;
    position: relative;
  }

  li:before {
    content: "";
    height: 10px;
    width: 10px;
    background: #33d664;
    position: absolute;
    border-radius: 50%;
    left: 11px;
    top: 11px;
  }

  li + li {
    margin-top: 1em;
  } */
`;

export const Option = styled.li`
  color: ${(props) => (props.status ? "#fff" : "#33d664")};
  background: ${(props) => (props.status ? "#33d664" : "transparent")};
  border: 1px solid #33d664;
  border-radius: 15px;
  padding: 0.8em 1em 0.8em 2.5em;
  font-size: 0.8em;
  position: relative;
  cursor: pointer;

  :before {
    content: "";
    height: 10px;
    width: 10px;
    background: ${(props) => (props.status ? "#fff" : "#33d664")};
    position: absolute;
    border-radius: 50%;
    left: 11px;
    top: 11px;
  }

  & + & {
    margin-top: 1em;
  }
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  border-radius: 15px;
  background: #33d664;
  opacity: ${(props) => (props.empty !== null ? 1 : 0.2)};
  border: none;
  border-radius: 15px;
  padding: 0.8em 1em;
  font-size: 0.8em;
  margin-top: 2.2em;
  color: #fff;
  font-size: 1em;
`;
