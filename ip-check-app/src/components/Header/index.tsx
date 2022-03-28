import React from "react";
import { InputSearch } from "../Input";
import { Background } from "./Background";
import { Title } from "./Title";

export function Header({searchIp}: any) {
  return (
    <Background>
      <Title>IP Address Tracker</Title>
      <InputSearch searchIp={searchIp}></InputSearch>
    </Background>
  );
}
