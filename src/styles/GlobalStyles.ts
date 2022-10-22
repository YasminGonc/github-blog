import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme["base-background"]};
        color: ${props => props.theme["base-text"]};
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme["base-border"]}; //confirmar
    }

    body, input, textarea, button {
        font-family: 'Nunito', sans-serif;
    }
`