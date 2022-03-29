import React, { useState } from "react";
import { useQuery } from "react-query";
import { getDetailIp } from "../../services/ip.service";
import { Button } from "./Button";
import { Input } from "./Input";
import { Wrap } from "./Wrap";

export function InputSearch() {
  const [ip, setIp] = useState("");
  const { refetch } = useQuery("detail", () => getDetailIp(ip, true), {
    enabled: false,
  });
  const searchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIp(e.target.value);
  };

  const search = (e: any) => {
    if (e.key === "Enter" || e.type === "click") {
      refetch();
    }
  };
  return (
    <Wrap data-testid="container">
      <Input
        placeholder="Search for any IP address or domain"
        type="text"
        value={ip}
        onChange={(e) => searchValue(e)}
        onKeyPress={search}
      />
      <Button data-testid="button-search" onClick={search}></Button>
    </Wrap>
  );
}
