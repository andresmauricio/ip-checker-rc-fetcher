import React, { Fragment } from "react";
import { GlobalStyles } from "./shared/styles/GlobalStyles";
import { Global } from "@emotion/react";
import { Header } from "./components/Header/index";
import { Summary } from "./components/Summary";
import { Map } from "./components/Map";

function App() {
  return (
    <Fragment>
      <Global styles={GlobalStyles} />
      <Header />
      <Summary />
      <Map />
    </Fragment>
  );
}

export default App;
