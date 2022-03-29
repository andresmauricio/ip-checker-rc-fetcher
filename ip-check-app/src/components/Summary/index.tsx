import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getDetailIp, getIp } from "../../services/ip.service";
import { Card } from "./Card";
import { Column } from "./Column";
import { Result } from "./Result";
import { Title } from "./Title";

export function Summary({ data }: { data: any }) {

  return (
    <Card>
      {data &&
        data.map((item: any, idx: number) => (
          <Column key={idx}>
            <Title>{item?.title}</Title>
            <Result>{item?.description}</Result>
          </Column>
        ))}
    </Card>
  );
}
