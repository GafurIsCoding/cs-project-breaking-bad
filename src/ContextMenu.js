import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContextMenuContainer = styled.ul`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  @media (max-width: 670px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 1345px) {
    margin-top: 50px;
    width: 100%;
    justify-content: space-evenly;
  }
`;
const ContextMenuItem = styled.li`
  font-family: var(--main-font);
  font-size: 3.5rem;
  color: white;
  transition: color 0.2s;
  font-weight: 900;
  &:hover {
    transition: color 0.2s;
    color: #f6d743;
  }
`;

function ContextMenu() {
  return (
    <ContextMenuContainer>
      <Link to="/cast" target="_blank" rel="noopener noreferrer">
        <ContextMenuItem>Cast</ContextMenuItem>
      </Link>
      <Link to="/episodes" target="_blank" rel="noopener noreferrer">
        <ContextMenuItem>Episodes</ContextMenuItem>
      </Link>
     
    </ContextMenuContainer>
  );
}
export default ContextMenu;
