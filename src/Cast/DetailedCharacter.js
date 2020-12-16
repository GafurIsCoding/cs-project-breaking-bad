import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Logo";
import ContextMenu from "../ContextMenu";
import { FaBirthdayCake } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { GiChewedSkull } from "react-icons/gi";
import { GoPerson } from "react-icons/go";
import { FaTicketAlt } from "react-icons/fa";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom right,
    var(--main-dark-green),
    #33cc75
  );
`;

const Header = styled.header`
  padding-top: 30px;
  padding-bottom: 80px;
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

const Character = styled.div`
  width: 90vw;
  display: flex;
  padding-top: 3%;
  padding-bottom: 10%;
  margin: auto;
  justify-content: space-evenly;

  @media (max-width: 1300px) {
    padding-top: initial;

    margin: auto;
    height: auto;
    flex-direction: column;
    align-items: center;
  }
`;

const CharacterInfo = styled.div`
  font-family: var(--main-font);
  font-weight: 700;
  font-size: 2.8rem;
  color: white;

  h3 {
    margin-bottom: 10px;
  }

  @media (max-width: 1700px) {
    font-size: 2.5rem;
  }
  @media (max-width: 1440px) {
    font-size: 2rem;
  }
  @media (max-width: 1300px) {
    width: 100%;
    text-align: center;
  }
`;

const CharacterImage = styled.img`
  height: 800px;
  @media (max-width: 1300px) {
    margin-top: 50px;
  }
`;

const CharacterName = styled.h1`
  font-size: 5rem;
  text-align: center;
  margin-top: -30px;
  @media (max-width: 1700px) {
    font-size: 4rem;
  }
  @media (max-width: 1345px) {
    margin-top: auto;
  }
`;

const CharacterNickname = styled.h2`
  text-align: center;
  margin-bottom: 50px;
`;

const Birthday = styled.h3`
  @media (max-width: 1300px) {
    margin-bottom: 20px;
  }
`;

const CharacterOccupationContainer = styled.h3`
  @media (max-width: 1300px) {
    margin-bottom: 20px;
  }
`;

const CharacterOccupation = styled.li`
  list-style: lower-alpha;
  font-weight: 400;
  margin-left: 90px;
  @media (max-width: 1700px) {
    list-style: none;
    margin: 10px auto;
  }
`;

const CharacterStatus = styled.h3`
  @media (max-width: 1300px) {
    margin-bottom: 20px;
  }
`;

const PlayedBy = styled.h3`
  @media (max-width: 1300px) {
    margin-bottom: 20px;
  }
`;

const Seasons = styled.h3`
  @media (max-width: 1300px) {
    margin-bottom: 20px;
  }
`;

const ThinText = styled.span`
  font-weight: 400;
`;

//doing this just to give items spacing from text, wrapping it in a span, so it has some margin by default
const SpacedIcon = styled.span``;

//doing this to center some icons relative to the text they are next to
const CenteredIcon = styled.span`
  vertical-align: -7px;
`;

function DetailedCharacter() {
  //useParams() is a feature of react router
  let { characterName } = useParams();

  //holds data from an api
  const [characters, setCharacters] = useState();

  //holds current character to display on the page
  const [currentCharacter, setCurrentCharacter] = useState();

  //fetching the data from the api to set the current character to display below
  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then((characters) => characters.json())
      .then(setCharacters);
  }, []);

  useEffect(() => {
    if (characters) {
      //setting the current character to display on the page
      characters.map((character) => {
        //handling a person with a dash in their name
        if (characterName === "Lydia-Rodarte-Quayle") {
          setCurrentCharacter(characters[13]);
          //handling a person with a dash in their name
        } else if (characterName === "No-Doze") {
          setCurrentCharacter(characters[33]);
        } //replacing all dashes with a space because the name is coming from the router, which displays the name in a format NAME-LASTNAME, and then I compare it to the character being iterated over, if it matches I set currentCharacter to it
        else if (characterName.replace(/-/g, " ") === character.name) {
          setCurrentCharacter(character);
        }
      });
    }
  }, [characters]);

  return currentCharacter ? (
    <PageContainer>
      <Header>
        <Logo />
        <ContextMenu />
      </Header>
      <Character>
        <CharacterInfo>
          <CharacterName>{currentCharacter.name}</CharacterName>
          <CharacterNickname>
            a.k.a "{currentCharacter.nickname}"
          </CharacterNickname>
          <Birthday>
            <SpacedIcon>
              <FaBirthdayCake />
            </SpacedIcon>{" "}
            Birthday: <ThinText>{currentCharacter.birthday}</ThinText>
          </Birthday>
          <CharacterOccupationContainer>
            {" "}
            <SpacedIcon>
              <FaSuitcase />
            </SpacedIcon>{" "}
            Occupation:
            {/*some characters have an array of occupations, so I'm mapping over it */}
            {currentCharacter.occupation.map((occ) => {
              return <CharacterOccupation>{occ}</CharacterOccupation>;
            })}
          </CharacterOccupationContainer>
          <CharacterStatus>
            <SpacedIcon>
              <GiChewedSkull />
            </SpacedIcon>{" "}
            Status: <ThinText>{currentCharacter.status}</ThinText>
          </CharacterStatus>
          <PlayedBy>
            <SpacedIcon>
              <GoPerson />
            </SpacedIcon>{" "}
            Played by: <ThinText>{currentCharacter.portrayed}</ThinText>
          </PlayedBy>
          <Seasons>
            {" "}
            <CenteredIcon>
              <FaTicketAlt />
            </CenteredIcon>{" "}
            Appeared in seasons:
            {currentCharacter.appearance.map((season) => {
              //if it's the last item don't put a coma after it
              if (
                currentCharacter.appearance.indexOf(season) ===
                currentCharacter.appearance.length - 1
              ) {
                return <ThinText>{` ${season}`}</ThinText>;
              }
              //if it's not the last item, return with a coma and a space after
              else {
                return <ThinText>{` ${season},`}</ThinText>;
              }
            })}
          </Seasons>
        </CharacterInfo>
        <CharacterImage src={currentCharacter.img} />
      </Character>
    </PageContainer>
  ) : null;
}
export default DetailedCharacter;

//name.replace(/-/g, " ")
