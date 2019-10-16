module.exports = {
  theme: {
    extend: {
      height: {
        fc: 'fit-content',
        28: '7rem',
      },
      width: {
        fc: 'fit-content',
      },
      minHeight: {
        16: '4rem',
      },
      backgroundColor: () => ({
        current: 'currentColor',
      }),
      fontFamily: {
        default: ['Raleway', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
