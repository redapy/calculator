import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width:100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(90deg, #055F51, #59A59D, #8AD9D1);
}
`