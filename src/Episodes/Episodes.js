import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Season from "./Season";
import ContextMenu from "../ContextMenu";
import Logo from "../Logo";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom right,
    var(--main-dark-green),
    #33cc75
  );
`;

const Seasons = styled.div`
  height: 100%;
  width: 90vw;
  margin: 0 auto;
`;

const Header = styled.header`
  width: 100%;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 900px) {
    padding-bottom: 0px;
  }
  @media (max-width: 1345px) {
    flex-direction: column;
  }
`;

function Episodes() {
  const [episodes, setEpisodes] = useState();

  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/episodes")
      .then((episodes) => episodes.json())
      .then(setEpisodes);
  }, []);

  return episodes ? (
    <PageContainer>
      <Header>
        <Logo />
        <ContextMenu />
      </Header>
      <Seasons>
        <Season season="1" episodesArray={episodes} />
        <Season season="2" episodesArray={episodes} />
        <Season season="3" episodesArray={episodes} />
        <Season season="4" episodesArray={episodes} />
        <Season season="5" episodesArray={episodes} />
      </Seasons>
    </PageContainer>
  ) : null;
}
export default Episodes;
