import styled from "@emotion/styled";

export const Input = styled.input`
  min-width: 300px;
  max-width: 300px;
  height: 40px;
  padding: 0px 10px;
  outline: none;
  border: none;
  color: hsl(0, 0%, 17%);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  &::placeholder {
    color: hsl(0, 0%, 59%);
    font-size: 14px;
  }
`;
