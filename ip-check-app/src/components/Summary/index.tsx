import React from "react";
import { Card } from "./Card";
import { Column } from "./Column";
import { Result } from "./Result";
import { Title } from "./Title";

const data = [
  { title: "IP ADDRESS", description: "192.212.174.101" },
  { title: "location", description: "Brooklyn, NY 100001" },
  { title: "timezone", description: "UTC-05:00" },
  { title: "ISP", description: "SpaceX Starlink" },
];

export function Summary() {
  return (
    <Card>
      {data &&
        data.map((item) => (
          <Column>
            <Title>{item.title}</Title>
            <Result>{item.description}</Result>
          </Column>
        ))}
    </Card>
  );
}
