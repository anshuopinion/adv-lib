import { createGlobalStyle } from "styled-components";

import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
${reset}

//Fonts

*, *:before,*:after{
box-sizing:border-box;

}
html{
  box-sizing:border-box;
  scroll-behavior:smooth;
 
}
body{
  

  


  a{
    text-decoration:none;
    color:inherit;
  }
}
`;

export default GlobalStyle;
