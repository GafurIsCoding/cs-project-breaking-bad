import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoContainer = styled.h1`
  color: white;
  font-family: sans-serif;
  text-align: center;
  font-size: 5rem;
`;

const GreenBox = styled.span`
  background: linear-gradient(
    to bottom right,
    var(--main-light-green),
    var(--main-dark-green) 50%
  );
  border: 1px solid white;
  padding: 10px;
  position: relative;
`;

const GreenBoxNumber = styled.span`
  position: absolute;
  font-size: 1rem;
  background-color: inherit;
  right: 10px;
`;

function Logo() {
  return (
    <Link to="/">
      <LogoContainer>
        <GreenBox>
          Br<GreenBoxNumber>35</GreenBoxNumber>
        </GreenBox>
        eaking<br></br>
        <GreenBox>
          Ba<GreenBoxNumber>56</GreenBoxNumber>
        </GreenBox>
        d
      </LogoContainer>
    </Link>
  );
}
export default Logo;
