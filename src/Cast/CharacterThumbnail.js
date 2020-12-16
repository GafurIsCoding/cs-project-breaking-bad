import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CharacterContainer = styled.div`
  width: 445px;
  height: 400px;
  position: relative;
  opacity: 1;
  transition: opacity 0.2s;
  margin: 30px auto;
  font-family: var(--main-font);
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.7);
  transition: all 0.5s;
  &:hover {
    transition: all 0.5s;
    opacity: 0.8;
    box-shadow: 0 20px 70px rgba(0, 0, 0, 0.7);
  }
`;

const CharacterThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 10%;
`;

const CharacterNamesContainer = styled.div`
  position: absolute;
  bottom: 0;
  color: white;
  width: 100%;
  margin-left: 10px;
  margin-bottom: 10px;
`;
const CharacterName = styled.h1`
  font-weight: 700;
`;
const PlayedBy = styled.h2`
  font-weight: 400;
`;

function CharacterThumbnail(props) {
  return (
    <CharacterContainer>
      {/* replacing all spaces with a dash, just to make routing easier */}
      <Link
        to={`/cast/${props.name.replace(/\s+/g, "-")}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CharacterThumbnailImage src={props.characterImg} />
        <CharacterNamesContainer>
          <CharacterName>{props.name}</CharacterName>
          <PlayedBy>{props.actor}</PlayedBy>
        </CharacterNamesContainer>
      </Link>
    </CharacterContainer>
  );
}
export default CharacterThumbnail;
