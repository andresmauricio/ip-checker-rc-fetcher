import styled from "@emotion/styled";

export const Input = styled.input`
  min-width: 300px;
  max-width: 300px;
  height: 40px;
  padding: 0px 10px;
  outline: none;
  border: none;
  color: var(--very-dark-gray);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  &::placeholder {
    color: var(--dark-gray);
    font-size: 14px;
  }
`;
