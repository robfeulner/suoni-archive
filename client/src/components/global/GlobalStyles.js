import { createGlobalStyle } from "styled-components";
import { COLORS } from "./constants";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap');

    *{
        margin: 10px 15px;
        font-family: 'Hammersmith One', sans-serif;
    }
    h1, h2, h3{
        color: ${COLORS.blue};
        font-family: 'Hammersmith One', sans-serif;

    }

    body{
        background-color: ${COLORS.cream};

    }
    
    p{
        
        
    }
    span{
        
    }
`;

export default GlobalStyles;
