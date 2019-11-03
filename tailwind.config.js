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
        36: '9rem',
        80: '20rem',
      },
      minHeight: {
        6: '1.5rem',
        10: '2.5rem',
        16: '4rem',
        17: '4.25rem',
        32: '8rem',
      },
      inset: {
        4: '1rem',
        20: '5rem',
      },
      backgroundColor: () => ({
        current: 'currentColor',
      }),
      fontFamily: {
        default: ['Raleway', 'sans-serif'],
      },
    },
    screens: {
      sm: '600px',
      md: '1000px',
    },
  },
  variants: {},
  plugins: [],
};
