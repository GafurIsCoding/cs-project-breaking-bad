import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Logo from "../Logo";
import ContextMenu from "../ContextMenu";
import CharacterThumbnail from "../Cast/CharacterThumbnail";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom right,
    var(--main-dark-green),
    #33cc75
  );
`;

const EpisodeContainer = styled.div`
  font-family: var(--main-font);
  padding-bottom: 5%;
`;

const EpisodeTitle = styled.h1`
  color: white;
  text-align: center;
`;

const AirDate = styled.h2`
  color: white;
  text-align: center;
`;

const EpisodeCharacters = styled.div`
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

const CharactersHeader = styled.h1`
  margin-top: 50px;
  color: white;
  text-align: center;
`;

const CharactersAndHeader = styled.div``;

function Episode() {
  let { episodeNumber } = useParams();

  const [episodes, setEpisodes] = useState();

  const [characters, setCharacters] = useState();

  const [currentEpisode, setCurrentEpisode] = useState();

  //Fetching episodes from an API
  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/episodes/")
      .then((episodes) => episodes.json())
      .then(setEpisodes);
  }, []);

  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then((characters) => characters.json())
      .then(setCharacters);
  }, []);

  // Setting the current episode based on the URL
  useEffect(() => {
    if (episodes) {
      setCurrentEpisode((_) =>
        episodes.find(({ episode_id }) => episode_id == episodeNumber)
      );
    }
  }, [episodes, episodeNumber]);

  return currentEpisode && characters ? (
    <PageContainer>
      <Header>
        <Logo />
        <ContextMenu />
      </Header>
      <EpisodeContainer>
        <EpisodeTitle>
          {" "}
          {currentEpisode.episode}. {currentEpisode.title} (Season{" "}
          {currentEpisode.season})
        </EpisodeTitle>
        <AirDate>Air Date: {currentEpisode.air_date}</AirDate>
        <CharactersAndHeader>
          <CharactersHeader>Characters in this episode:</CharactersHeader>
          <EpisodeCharacters>
            {currentEpisode.characters.map((character) => {

       //  HANDLING API INCONSISTENCIES       
      if(character === "Hank Schrader"){
        return(<CharacterThumbnail
                        key={character}
                        name={
                          characters.find(
                            ({ name, nickname }) =>
                              name ===  "Henry Schrader"
                          ).name
                        }
                        actor={
                          characters.find(
                            ({ name, nickname }) =>
                              name === "Henry Schrader"
                          ).portrayed
                        }
                        characterImg={
                          characters.find(
                            ({ name, nickname }) =>
                              name === "Henry Schrader"
                          ).img
                        }
                      />)
      }      //  HANDLING API INCONSISTENCIES       
else if (character === "Elliott Schwarts"){
        return(<CharacterThumbnail
                        key={character}
                        name={
                          characters.find(
                            ({ name, nickname }) =>
                              name ===  "Elliot Schwartz"
                          ).name
                        }
                        actor={
                          characters.find(
                            ({ name, nickname }) =>
                              name === "Elliot Schwartz"
                          ).portrayed
                        }
                        characterImg={
                          characters.find(
                            ({ name, nickname }) =>
                              name === "Elliot Schwartz"
                          ).img
                        }
                      />)
      } //  HANDLING API INCONSISTENCIES       
else if (character === "Gretchen Swartz"){
        return(<CharacterThumbnail
                        key={character}
                        name={
                          characters.find(
                            ({ name, nickname }) =>
                              name ===  "Gretchen Schwartz"
                          ).name
                        }
                        actor={
                          characters.find(
                            ({ name, nickname }) =>
                              name === "Gretchen Schwartz"
                          ).portrayed
                        }
                        characterImg={
                          characters.find(
                            ({ name, nickname }) =>
                              name === "Gretchen Schwartz"
                          ).img
                        }
                      />)
      }//  HANDLING API INCONSISTENCIES       
else if (character === "Ted Beneke"){
        return(<CharacterThumbnail
                        key={character}
                        name={
                          characters.find(
                            ({ name, nickname }) =>
                              name ===  "Theodore Beneke"
                          ).name
                        }
                        actor={
                          characters.find(
                            ({ name, nickname }) =>
                              name === "Theodore Beneke"
                          ).portrayed
                        }
                        characterImg={
                          characters.find(
                            ({ name, nickname }) =>
                              name === "Theodore Beneke"
                          ).img
                        }
                      />)
      }//  HANDLING API INCONSISTENCIES       
else if (character === "Mike Erhmantraut"){
        return(<CharacterThumbnail
                        key={character}
                        name={
                          characters.find(
                            ({ name, nickname }) =>
                              name ===  "Mike Ehrmantraut"
                          ).name
                        }
                        actor={
                          characters.find(
                            ({ name, nickname }) =>
                              name === "Mike Ehrmantraut"
                          ).portrayed
                        }
                        characterImg={
                          characters.find(
                            ({ name, nickname }) =>
                              name === "Mike Ehrmantraut"
                          ).img
                        }
                      />)
      }//  HANDLING API INCONSISTENCIES       
else if (character === "The cousins"){
        return(<CharacterThumbnail
                        key={character}
                        name={
                          characters.find(
                            ({ name, nickname }) =>
                              name ===  "Marco & Leonel Salamanca"
                          ).name
                        }
                        actor={
                          characters.find(
                            ({ name, nickname }) =>
                              name === "Marco & Leonel Salamanca"
                          ).portrayed
                        }
                        characterImg={
                          characters.find(
                            ({ name, nickname }) =>
                              name === "Marco & Leonel Salamanca"
                          ).img
                        }
                      />)
      }//  HANDLING API INCONSISTENCIES 
      else if (character === "a fly"){
        return null
      }//  HANDLING API INCONSISTENCIES       
else if (character === "White White Jr."){
        return(<CharacterThumbnail
                        key={character}
                        name={
                          characters.find(
                            ({ name, nickname }) =>
                              name ===  "Walter White Jr."
                          ).name
                        }
                        actor={
                          characters.find(
                            ({ name, nickname }) =>
                              name === "Walter White Jr."
                          ).portrayed
                        }
                        characterImg={
                          characters.find(
                            ({ name, nickname }) =>
                              name === "Walter White Jr."
                          ).img
                        }
                      />)
      }//  HANDLING API INCONSISTENCIES       
else if (character === ""){
        return null
      }//  HANDLING API INCONSISTENCIES       
else if (character === "Don Eladio"){
        return null
      }//  HANDLING API INCONSISTENCIES       
else if (character === "Steve Gomez"){
        return(<CharacterThumbnail
                        key={character}
                        name={
                          characters.find(
                            ({ name, nickname }) =>
                              name ===  "Steven Gomez"
                          ).name
                        }
                        actor={
                          characters.find(
                            ({ name, nickname }) =>
                              name === "Steven Gomez"
                          ).portrayed
                        }
                        characterImg={
                          characters.find(
                            ({ name, nickname }) =>
                              name === "Steven Gomez"
                          ).img
                        }
                      />)
      }//  HANDLING API INCONSISTENCIES       
else if (character === "Eliott Schwartz"){
        return(<CharacterThumbnail
                        key={character}
                        name={
                          characters.find(
                            ({ name, nickname }) =>
                              name ===  "Elliot Schwartz"
                          ).name
                        }
                        actor={
                          characters.find(
                            ({ name, nickname }) =>
                              name === "Elliot Schwartz"
                          ).portrayed
                        }
                        characterImg={
                          characters.find(
                            ({ name, nickname }) =>
                              name === "Elliot Schwartz"
                          ).img
                        }
                      />)
      }else {
              return (
                <CharacterThumbnail
                  key={character}
                  name={
                    characters.find(
                      ({ name, nickname }) =>
                        name === character || nickname === character
                    ).name
                  }
                  actor={
                    characters.find(
                      ({ name, nickname }) =>
                        name === character || nickname === character
                    ).portrayed
                  }
                  characterImg={
                    characters.find(
                      ({ name, nickname }) =>
                        name === character || nickname === character
                    ).img
                  }
                />
              );}
            })}
          </EpisodeCharacters>
        </CharactersAndHeader>
      </EpisodeContainer>
    </PageContainer>
  ) : null;
}

export default Episode;


// if(character === "Hank Schrader"){
//   return "Henry Schrader"

// }