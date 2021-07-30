import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        background-color: #F9F9F9;
        min-height: 100vh;
        position: relative;
        display: flex;
        flex-direction: column;
    }
    .disabled-link {
        pointer-events: none;
        opacity: .65;
    }
    .btn:focus,.btn:active {
        outline: 0 !important;
    }
`

export default GlobalStyle
