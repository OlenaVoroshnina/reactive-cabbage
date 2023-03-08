import styled from 'styled-components';
import { keyframes } from 'styled-components';

import CabbageOrange from '../../images/cabbage/cabbage-orange.png';
import BgCabbage from '../../images/cabbage/kapustaDesc-Bottom.svg';

const mainCabbageAnimation = keyframes`
  0% {
      -webkit-transform: translateY(-200vw) rotate(720deg) scale(0);
    transform: translateY(-100vw) rotate(720deg) scale(0);
  }
   50% {
     -webkit-transform: translateY(0vw) rotate(720deg) scale(2);
    transform: translateY(0vw) rotate(720deg) scale(2);
   }
  100% {
       -webkit-transform: translateY(100) rotate(0deg) scale(1);
    transform: translateY(100) rotate(0deg) scale(1);
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 296px;
  background-color: #f5f6fb;
  background-image: url(${BgCabbage});
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1000;
  border-bottom-left-radius: 125px;
  @media screen and (min-width: 768px) {
    height: 526px;
  }
`;

export const Particles = styled.ul`
  display: flex;
  margin: 0px;
  padding: 0px;
  & li {
    position: absolute;
    display: block;
    list-style: none;

    background: transparent;
    -webkit-animation: ${mainCabbageAnimation} 25s linear infinite;
    animation: ${mainCabbageAnimation} 12s linear infinite;

    &:nth-child(1) {
      top: -70%;
      width: 70px;
      height: 70px;
      -webkit-animation-delay: 2s;
      animation-delay: 2s;
      -webkit-animation-duration: 12s;
      animation-duration: 12s;
      background-image: url(${CabbageOrange});
      background-repeat: repeat-y;
      background-size: contain;
    }
    &:nth-child(2) {
      top: 25%;
      width: 80px;
      height: 80px;
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
      -webkit-animation-duration: 5s;
      animation-duration: 9s;
      background-image: url(${CabbageOrange});
      background-repeat: repeat-x;
      background-size: contain;
    }
    &:nth-child(3) {
      right: 0%;
      width: 83px;
      height: 89px;
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
      -webkit-animation-duration: 9s;
      animation-duration: 9s;
      background-image: url(${CabbageOrange});
      background-repeat: repeat-y;
      background-size: contain;
    }
    &:nth-child(4) {
      bottom: 40%;
      width: 60px;
      height: 60px;
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
      -webkit-animation-duration: 18s;
      animation-duration: 18s;
      background-image: url(${CabbageOrange});
      background-repeat: repeat-x;
      background-size: contain;
    }
    &:nth-child(5) {
      bottom: -65%;
      width: 80px;
      height: 80px;
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
      -webkit-animation-duration: 15s;
      animation-duration: 15s;
      background-image: url(${CabbageOrange});
      background-repeat: repeat-y;
      background-size: contain;
    }
  }
`;
