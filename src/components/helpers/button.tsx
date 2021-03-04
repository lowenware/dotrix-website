import { darken, desaturate } from "polished";
import styled from "styled-components";
import theme from "src/styles/theme";

interface IButton {
  color?: string,
  background?: string,
}

const Button = styled.button<IButton>`
  & {
    color: white;
    font-size: 1rem;
    border-radius: 3px;
    border-color: transparent;
    display: flex;
    align-items: center;
    padding: 4px 10px;
    cursor: pointer;
    text-decoration: none;
    background-color: ${props => props.background
      ? props.background
      : theme.color.darkBlue
    };
  }
  &:hover {
    text-decoration: none;
    background-color: ${props =>props.background
      ? darken(0.05, desaturate(0.1, props.background))
      : theme.color.darkBlue
    };
  }
  &:active {
    transform: translateY(1px);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px black;
    text-decoration: none;
  }
  img {
    width: 1em;
    height: 1em;
    min-width: 1em;
    margin: 2px;
    margin-right: 0.4rem;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
  }
`;

export default Button;
