import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.colors.creamColor};
  margin-top: 80px;
  padding: 30px;
  color: ${(props) => props.theme.colors.textColor};
}

h1 {
  font-size: 2.5rem;
  line-height: 3rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.brownColor};
  margin: 20px 0;
  text-align: center
}

h2 {
  font-size: 1.3rem;
  line-height: 1.5rem;
  font-weight: 600;
  margin: 10px 0;
}

h3 {
font-size: 1.1rem;
line-height: 1.3rem;
font-weight: 500;
margin: 10px 0;
}

::-webkit-scrollbar {
  width: 8px;
  border-radius: 0.25rem;
}

::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme.colors.lilacColor};
  border-radius: 0.25rem;
}
`
