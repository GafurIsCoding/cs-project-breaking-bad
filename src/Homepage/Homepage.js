import React from "react";
import Logo from "../Logo";
import styled from "styled-components";
import Homepagemenu from "./HomepageMenu";
import Footer from "./Footer";

const HomepageContainer = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`;
const Wrapper = styled.div`
  background-image: url(https://images.amcnetworks.com/amc.com/wp-content/uploads/2012/06/BB_S5B_004_L.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 96%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-position: center;
  background-image: linear-gradient(to bottom, transparent 70%, black),
    url(https://images.amcnetworks.com/amc.com/wp-content/uploads/2012/06/BB_S5B_004_L.jpg);
  background-size: cover;
  @media (max-width: 1100px) {
    background-image: linear-gradient(to bottom, transparent 70%, black),
      url(https://images.amcnetworks.com/amc.com/wp-content/uploads/2012/06/BB_S5B_004_sm.jpg);
  }
`;
function Homepage() {
  return (
    <HomepageContainer>
      <Wrapper>
        <Logo />
        <Homepagemenu />
      </Wrapper>
      <Footer />
    </HomepageContainer>
  );
}
export default Homepage;
