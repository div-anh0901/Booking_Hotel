import styled from 'styled-components';
import { StyledSliderItem } from './SliderItemStyles';

type SliderWrapperProps = {
  zoomFactor: number;
  visibleSlides: number;
};

type SliderProps = {
  visibleSlides: number;
  transformValue: string;
  zoomFactor: number;
  slideMargin: number;
  pageTransition: number;
  ref: any;
};

export const StyledSliderWrapper = styled.div<SliderWrapperProps>`
  overflow: hidden;
  position: relative;
  background: white;
  width: 100%;
  
  .button-wrapper {
    position: absolute;
    width: 55px;
    height: 100%;
    top: 0;
    box-sizing: border-box;
    display:flex;
    align-items:center;
  }

  .button {
    display: block;
    background: rgb(252, 252, 252 , 0.7);
    border: 0;
    display:flex;
    align-items:center;
    justify-content: center;
    width: 50px;
    height: 50px;
    color: #000;
    font-size: 2rem;
    font-weight: 800;
    cursor: pointer;
    outline: none;
    transition: all 0.7s;
    user-select: none;

    :hover {
      opacity: 0.5;
    }
  }

  .back {
    left: 0;
    border-radius:  50%;
  }

  .forward {
    right: 0;
    border-radius: 50%;
  }
`;

export const StyledSlider = styled.div<SliderProps>`
  display: flex;
  transition: transform ${(props) => props.pageTransition}ms ease;

  :hover ${StyledSliderItem} {
    transform: translateX(${(props) => props.transformValue});
  }
`;
