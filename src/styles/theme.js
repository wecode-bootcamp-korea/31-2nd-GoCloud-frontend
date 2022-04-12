const Flex = (justifyContent, alignItems) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

const theme = {
  background: '#fff',
  grey: '#e9e9e9',
  lightgrey: '#f6f6f6',
  purple: '#6872FD',
  yellow: '#f1c428',

  flexMixIn: (justify, align) => `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
  `,
};
export default theme;
