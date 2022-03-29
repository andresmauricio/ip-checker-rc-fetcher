import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Wrap } from "./Wrap";

const regexIp = new RegExp("^(?:[0-9]{1,3}.){3}[0-9]{1,3}$");

export function InputSearch({ searchIp }: any) {
  const [ip, setIp] = useState("");
  const searchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const current = e.target.value.replace(regexIp, "");
    setIp(e.target.value);
  };
  const search = (e: any) => {    
    // const isValidIp = Boolean(Number(ip)) && regexIp.test(ip);
    // if (!isValidIp) return;
    if (e.key === "Enter" || e.type === 'click') searchIp(ip);
  };
  return (
    <Wrap>
      <Input
        placeholder="Search for any IP address or domain"
        type="text"
        value={ip}
        onChange={(e) => searchValue(e)}
        onKeyPress={search}
      />
      <Button onClick={search}></Button>
    </Wrap>
  );
}
