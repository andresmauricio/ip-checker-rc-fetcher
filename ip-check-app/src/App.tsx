import React, { Fragment, useEffect, useState } from "react";
import { GlobalStyles } from "./shared/styles/GlobalStyles";
import "./shared/styles/map.css"
import { Global } from "@emotion/react";
import { Header } from "./components/Header/index";
import { Summary } from "./components/Summary";
import { Map } from "./components/Map";
import { getDetailIp, getIp } from "./services/ip.service";

function App() {
  const [data, setData] = useState([]) as any;
  const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 }) as any;

  const x = async () => {
    const ip = await getIp();
    const detail = await getDetailIp(ip, true);
    setData(detail.summary);
    setLocation(detail.location);
  };

  const searchIp = async (ip: string) => {
    const detail = await getDetailIp(ip, true);    
    setData(detail.summary);
    setLocation(detail.location);
  }

  useEffect(() => {
    x();
  }, []);

  return (
    <Fragment>
      <Global styles={GlobalStyles} />
      <Header searchIp={searchIp} />
      <Summary data={data} />
      <Map location={location} />
    </Fragment>
  );
}

export default App;
