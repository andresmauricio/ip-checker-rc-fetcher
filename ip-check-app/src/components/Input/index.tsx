import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Wrap } from "./Wrap";

export function InputSearch() {
  return (
    <Wrap>
      <Input placeholder="Search for any IP address or domain" type="text" />
      <Button></Button>
    </Wrap>
  );
}
