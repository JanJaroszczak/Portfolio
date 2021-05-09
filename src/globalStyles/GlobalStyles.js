import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

html{
  font-size: 62.5%;
  font-weight: 300;
  color: #2e2a2a;
}

body{
 font-family: 'Prompt', sans-serif;
}

button {
  cursor: pointer;
  font-family: 'Prompt', sans-serif;
  outline: none;
}

ul {
  list-style: none;
}

h1 {
  font-size: 7rem;
}

h2 {
  font-size: 4rem;
}

h3 {
  font-size: 3rem;
}

h4 {
  font-size: 2.5rem;
}

p {
  font-size: 2rem;
}
`;

export default GlobalStyle;
