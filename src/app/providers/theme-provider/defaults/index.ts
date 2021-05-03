import { createGlobalStyle } from 'styled-components';

const GlobalDefaultStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        font-size: 16px
    }
    h1,h2,h3,h4,h5,h6 {
        margin: 0;
        font-weight: 600;
    }
`;

export default GlobalDefaultStyles;
