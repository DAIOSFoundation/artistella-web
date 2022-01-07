import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"



export const GlobalStyle = createGlobalStyle`
 ${reset}
 *{
   box-sizing: border-box;
   font-family: 'Roboto';
   margin:0;
   padding:0;
 }
 @font-face {
  font-family: 'Roboto';
  src: url('fonts/Roboto-Regular.ttf');
}

input{
  :focus{
    outline: none;
  }
}

`;