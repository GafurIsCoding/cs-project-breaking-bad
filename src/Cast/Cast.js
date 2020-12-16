import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CharacterThumbnail from "./CharacterThumbnail";
import Logo from "../Logo";
import ContextMenu from "../ContextMenu";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom right,
    var(--main-dark-green),
    #33cc75
  );
`;

const CharactersWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 90vw;
  margin: 0 auto;

  justify-content: space-between;
`;

const Header = styled.header`
  padding-top: 30px;
  padding-bottom: 100px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 670px) {
    padding-bottom: 30px;
  }
  @media (max-width: 1345px) {
    flex-direction: column;
  }
`;

function Characters() {
  //Array of an elements from an API
  const [characters, setCharacters] = useState();
  // Getting characters data
  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then((characters) => characters.json())
      .then(setCharacters);
  }, []);

  return characters ? (
    <PageContainer>
      <Header>
        <Logo />
        <ContextMenu />
      </Header>
      <CharactersWrapper>
        {characters

          //filtering out characters that are not in Breaking Bad
          .filter((character) => {
            return (
              character.name !== "Eduardo Salamanca" &&
              character.name !== "Charles McGill" &&
              character.name !== "Howard Hamlin" &&
              character.name !== "Kimberly Wexler"
            );
          })
          .map((character) => {
            //Removing the duplicate in the API
            if (character.char_id === 117) {
              return;
            }

            return (
              <CharacterThumbnail
                name={character.name}
                actor={character.portrayed}
                characterImg={character.img}
              />
            );
          })}
      </CharactersWrapper>
    </PageContainer>
  ) : null;
}
export default Characters;
