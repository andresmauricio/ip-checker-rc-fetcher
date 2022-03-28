import { css } from "@emotion/react";

export const GlobalStyles = css`
  *,
  *::after,
  *::before {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
  :root {
    --very-dark-gray: hsl(0, 0%, 17%);
    --dark-gray: hsl(0, 0%, 59%);
  }
  body {
    font-size: 18px;
    font-family: "Rubik", sans-serif;
    max-width: 1920px;
    margin: 0 auto;
  }
`;
