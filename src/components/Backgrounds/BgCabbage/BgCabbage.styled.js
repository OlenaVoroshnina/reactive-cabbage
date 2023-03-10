import styled from 'styled-components';
import CabagesBgDesk from 'images/cabbage/cabagesBgDesk.svg';
import CabagesTwo from 'images/cabbage/cabagesTwo.svg';

export const StyledBgCabbage = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 100%;
    height: 146px;
    position: absolute;
    z-index: -1;
    left: 497px;
    top: 973px;
    background-image: url(${CabagesTwo});
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1280px) {
    left: 0;
    top: 720px;
   //  width: 1096px;
    height: 232px;
    background-image: url(${CabagesBgDesk});
	 
  }
`;

