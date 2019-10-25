module.exports = {
  theme: {
    extend: {
      height: {
        fc: 'fit-content',
        17: '4.25rem',
        28: '7rem',
      },
      width: {
        fc: 'fit-content',
      },
      minHeight: {
        6: '1.5rem',
        16: '4rem',
        17: '4.25rem',
        32: '8rem',
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
