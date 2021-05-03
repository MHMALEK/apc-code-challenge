import styled, { keyframes, css } from "styled-components";

import { IconStyleProps } from "./types";

const spinAnimation = keyframes`
100% { transform: rotate(360deg) }

`;
const StyledIcon = styled.span<IconStyleProps>`
  ${({ theme, size }) => {
    return `font-size: ${size ? theme.dimensions[size] : `${size}px`}`;
  }};
  ${({ theme, color }) => {
    return `color: ${color ? theme.colors[color].main : color}`;
  }};
  cursor: pointer;
  display: inline-block;
  ${({ rotate }) => (rotate ? `transform: rotate(${rotate}deg)` : null)}
  transition: all 0.3s;
  ${({ animation }) => {
    if (animation) {
      if (animation === "spin") {
        return css`
          animation-name: ${spinAnimation};
          animation-duration: 1.3s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        `;
      }
    }
  }}
`;

export default StyledIcon;
