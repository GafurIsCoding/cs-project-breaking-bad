import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  @media (max-width: 1250px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const ListItem = styled.li`
  color: white;
  font-size: 5rem;
  font-family: var(--main-font);
  font-weight: 400;
  letter-spacing: -3px;
  transition: color 0.2s;
  &:hover {
    transition: color 0.2s;
    color: var(--main-light-green);
  }
  @media (max-width: 1250px) {
    margin: 10px auto;
  }
`;

function Homepagemenu() {
  return (
    <List>
      <Link to="/cast" target="_blank" rel="noopener noreferrer">
        <ListItem>Cast</ListItem>
      </Link>
      <Link to="/episodes" target="_blank" rel="noopener noreferrer">
        <ListItem>Episodes</ListItem>
      </Link>
 
    </List>
  );
}
export default Homepagemenu;
