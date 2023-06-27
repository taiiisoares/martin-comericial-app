import { createGlobalStyle } from "styled-components";
import { Poppins, Montserrat } from "next/font/google";

const poppins = Poppins({ weight: ["700"], subsets: ["latin"], display: "swap" });
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });

export const GlobalStyle = createGlobalStyle`    
    :root {
        --poppins: ${poppins.style.fontFamily};
        --montserrat: ${montserrat.style.fontFamily}
    }
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        font-family: var(--montserrat),sans-serif;
        font-weight: 400;
    }

    html {
        font-size: 62.5%;
    }

    body {
        overflow-x: hidden;
        ::-webkit-scrollbar {
           display: none;
        }
        
        scroll-behavior: auto;
    }
`;
