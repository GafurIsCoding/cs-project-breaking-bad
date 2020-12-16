import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  display: flex;
  width: 100%;
  height: 4%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Credentials = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-family: var(--main-font);
  margin: 20px;
  color: var(--main-light-green);
  a {
    color: var(--main-light-green);
    text-decoration: underline;
    margin-left: 5px;
    transition: color 0.2s;
  }
  a:hover {
    color: white;
    transition: color 0.2s;
  }
  @media (max-width: 900px) {
    margin: auto;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <Credentials>
        Developed by:{" "}
        <a
          href="https://github.com/GafurIsCoding"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gafur Iusupaliev
        </a>
        <Credentials>
          <a
            href="https://github.com/GafurIsCoding"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </Credentials>
      </Credentials>
      <Credentials>
        Api used:{" "}
        <a
          href="https://www.breakingbadapi.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.breakingbadapi.com/
        </a>
      </Credentials>
    </FooterContainer>
  );
}

export default Footer;
