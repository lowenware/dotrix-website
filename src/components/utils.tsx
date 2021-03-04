import { IQuery, query } from "src/config/mediaQuery";
import React from "react";
import styled from "styled-components";
import theme from "src/styles/theme";

interface IContainerProps {
  padding?: string,
  paddingFrom?: IQuery,
}

export const Container = styled.div<IContainerProps>`
  margin: auto;
  max-width: 1400px;
  width: 100%;

  @media ${props => query.from(props.paddingFrom)} {
    padding: ${props => props.padding ? props.padding : `0 ${theme.padding.x1}`};
  }
`;

interface ISeparatorProps {
  grow?: number;
}

export function Separator(props: ISeparatorProps) {
  return (
    <div style={{ flexGrow: (props.grow === undefined) ? 1 : props.grow }} />
  );
}
