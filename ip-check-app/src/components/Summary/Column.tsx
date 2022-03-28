import styled from "@emotion/styled";

export const Column = styled.div`
  padding-right: 60px;
  :not(:last-child) {
    border-right: 0.5px solid var(--dark-gray);
  }
  @media (max-width: 768px) {
    padding-right: 0px;
    :not(:last-child) {
      border-right: none;
    }
  }
`;
