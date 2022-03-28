import styled from "@emotion/styled";

export const Card = styled.div`
  background-color: white;
  padding: 10px 20px;
  min-height: 150px;
  width: 80%;
  margin: 0 auto;
  border-radius: 20px;
  margin-top: -75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 999;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    min-height: 250px;
    margin-top: -125px;

    }
`;
