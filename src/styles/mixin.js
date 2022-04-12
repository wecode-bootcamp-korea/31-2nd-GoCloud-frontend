import { css } from 'styled-components';

const Flex = (justifyContent, alignItems) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

export default Flex;
