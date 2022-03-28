import styled from "@emotion/styled";

export const Column = styled.div`
  padding-right: 40px;
  padding-left: 10px;
  :not(:last-child) {
    border-right: 0.5px solid var(--dark-gray);
  }
  @media (max-width: 768px) {
    padding-right: 0px;
    padding-left: 0px;
    :not(:last-child) {
      border-right: none;
    }
  }
`;
