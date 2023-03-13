import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
&::-webkit-scrollbar {
        width: 10px; 
    }
	&::-webkit-scrollbar-thumb {
        background: linear-gradient(transparent, #FF751D);
		border-radius: 6px;
    }
	&::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(transparent, #000);
		border-radius: 6px;
    }
body{
	background-color: ${theme.colors.bgWhite};
	font-family: ${theme.fonts.body};
	font-size: ${theme.fontSizes.xs};
	line-height: ${theme.lineHeights.normal};
color: ${theme.colors.textPrimary};
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
   margin: 0;
}

/* input[type="number" i] {
    padding: 0px;
    
} */
input {
  padding: 0px;
}

/* input:hover,
input:focus {
    outline: none;
} */

/* input[type="text" i] {
    padding: 0px;
} */

ul,
ol {
   margin: 0;
   padding: 0;

   list-style: none;
}

img {
   display: block;
	max-width: 100%;
	height: auto;
}
;`;

export default GlobalStyle;
