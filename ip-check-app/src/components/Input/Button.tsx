import styled from "@emotion/styled";
import arrow from "../../images/icon-arrow.svg";

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background-color: var(--very-dark-gray);
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: 10px;
  background-position: center center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: var(--dark-gray);
  }
`;
