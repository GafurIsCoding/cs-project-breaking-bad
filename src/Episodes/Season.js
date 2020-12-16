import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SeasonContainer = styled.div`
  margin-top: 80px;
  font-family: var(--main-font);
  color: white;
  a {
    color: white;
    transition: color 0.2s;
  }

  a:hover {
    transition: color 0.2s;
    color: #f6d743;
  }
`;

const SeasonNumber = styled.h1`
  text-align: center;
  margin: 30px auto;
  font-size: 3rem;
`;

const EpisodesContainer = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Episode = styled.div`
  width: 30%;
  text-align: center;
  margin: 10px auto;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const EpisodeTitle = styled.h1`
  font-weight: 400;
  text-decoration: underline;
`;

function Season(props) {
  return (
    <SeasonContainer>
      <SeasonNumber>Season {props.season}:</SeasonNumber>
      <EpisodesContainer>
        {props.episodesArray.map((episode) => {
          if (
            (episode.season === props.season &&
              episode.series === "Breaking Bad") ||
            //Here i'm handling API errors, the author wrote one of the episode's seasons with a space
            episode.season === ` ${props.season}`
          )
            return (
              <Episode key={episode.episode_id}>
                <Link
                  to={`/episodes/${episode.episode_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EpisodeTitle>
                    {episode.episode}. {episode.title}
                  </EpisodeTitle>
                </Link>
              </Episode>
            );
        })}
      </EpisodesContainer>
    </SeasonContainer>
  );
}
export default Season;
