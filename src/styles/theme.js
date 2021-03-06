const theme = {
  background: '#fff',
  grey: '#e9e9e9',
  lightgrey: '#f6f6f6',
  purple: '#632ed8',
  yellow: '#f1c428',

  flexMixIn: (justify, align) => `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
  `,
};
export default theme;
