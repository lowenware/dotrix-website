import { IQuery, query } from "src/config/mediaQuery";
import styled from "styled-components";
import theme from "src/styles/theme";

interface IProps {
  padding?: string,
  paddingFrom?: IQuery,
}

const Container = styled.div<IProps>`
  margin: auto;
  max-width: 1400px;
  width: 100%;

  @media ${props => query.from(props.paddingFrom)} {
    padding: ${props => props.padding ? props.padding : `0 ${theme.padding.x1}`};
  }
`;

export default Container;
