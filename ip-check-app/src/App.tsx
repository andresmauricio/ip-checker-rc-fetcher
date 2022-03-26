import React, { Fragment } from "react";
import { GlobalStyles } from "./shared/styles/GlobalStyles";
import { Global } from "@emotion/react";
import { Header } from "./components/Header/index";

function App() {
  return (
    <Fragment>
      <Global styles={GlobalStyles} />
      <Header />
    </Fragment>
  );
}

export default App;
