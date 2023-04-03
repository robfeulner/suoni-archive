import { createGlobalStyle } from "styled-components";
import { COLORS } from "./constants";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');


    *{
        margin: 10px 15px;
        font-family: 'Outfit', sans-serif;
        /* font-family: 'Hammersmith One', sans-serif; */
        /* font-family: 'Lora', serif; */
        /* font-family: 'Space Grotesk', sans-serif; */
        
    }
    h1, h2, h3{
        color: ${COLORS.blue};
        /* font-family: 'Lora', serif; */
        /* font-family: 'Hammersmith One', sans-serif; */
        /* font-family: 'Space Grotesk', sans-serif; */

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
