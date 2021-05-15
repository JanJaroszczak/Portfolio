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

.scroll-target::before {
  content:"";
  display:block;
  height: 150px; 
  margin: -150px 0 0; 
}

::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;

export default GlobalStyle;
