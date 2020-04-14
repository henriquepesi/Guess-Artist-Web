import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  height: 240px;
`;

export const ContainerScore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-bottom: 2em;
  }
  h3 {
    font-size: 1.5em;
    font-weight: 500;
    color: #33d664;
    margin-bottom: 0.5em;
  }
  span {
    font-size: 1.2em;
    font-weight: 500;
    color: #9182de;
  }
`;

export const StyledLink = styled(Link)`
  color: #33d664;
  text-decoration: none;
  margin-top: 3em;
`;
