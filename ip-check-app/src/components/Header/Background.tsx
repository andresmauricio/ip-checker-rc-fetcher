import styled from "@emotion/styled";
import background from "../../images/pattern-bg.png";

export const Background = styled.div`
  width: 100%;
  min-height: 40vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 75px;
`;
