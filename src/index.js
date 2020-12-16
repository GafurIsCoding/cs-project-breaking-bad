import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./Homepage/Homepage";
import Cast from "./Cast/Cast";
import { createGlobalStyle } from "styled-components"; //This is a way to style globally with styled components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailedCharacter from "./Cast/DetailedCharacter";
import Episodes from "./Episodes/Episodes";
import Episode from "./Episodes/Episode";

const GlobalStyles = createGlobalStyle` 
  *{
    margin: 0;
    padding: 0;
    --main-dark-green: #1F6032;
    --main-light-green: #369457;
      list-style: none;
      box-sizing: border-box;
      --main-font:'Noto Sans', sans-serif;
      

  ;
   
  }
  * a {
    text-decoration: none;
  }

  
  `;

function App() {
  //This is a way to style globally with styled components

  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/cast" exact>
            <Cast />
          </Route>
          <Route path="/cast/:characterName" exact>
            <DetailedCharacter />
          </Route>
          <Route path="/episodes" exact>
            <Episodes />
          </Route>
      
          <Route path="/episodes/:episodeNumber">
            <Episode />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
