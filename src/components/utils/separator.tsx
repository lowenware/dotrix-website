import styled from "styled-components";

interface IProps {
  grow?: number;
}

const Separator = styled.div<IProps>`
  flex-grow: ${props => props.grow === undefined ? 1 : props.grow};
`;

export default Separator;

