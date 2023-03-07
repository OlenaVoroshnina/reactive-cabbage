import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
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
