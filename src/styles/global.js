import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Cinzel+Decorative&family=Montserrat:wght@400;500&family=Mukta:wght@200;300;400;500;800&display=swap');
    }

    header {
        @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Cinzel+Decorative&family=Montserrat:wght@400;500&family=Mukta:wght@200;300;400;500;800&family=Titan+One&display=swap');
    }
`