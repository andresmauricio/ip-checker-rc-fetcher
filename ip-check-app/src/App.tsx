import { Fragment } from "react";
import { GlobalStyles } from "./shared/styles/GlobalStyles";
import "./shared/styles/map.css";
import { Global } from "@emotion/react";
import { Header } from "./components/Header/index";
import { Summary } from "./components/Summary";
import { Map } from "./components/Map";
import { getDetailIp, getIp } from "./services/ip.service";
import { useQuery } from "react-query";

function App() {
  const { data: ip } = useQuery("ip", getIp);
  const { data: detail } = useQuery("detail", () => getDetailIp(ip, true), {
    initialData: { location: { lat: 51.505, lng: -0.09 }, summary: [] },
    enabled: !!ip,
  });
  return (
    <Fragment>
      <Global styles={GlobalStyles} />
      <Header />
      <Summary data={detail?.summary} />
      <Map location={detail?.location} />
    </Fragment>
  );
}

export default App;
