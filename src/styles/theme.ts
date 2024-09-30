const defaultConfig = {
  font: {
    family: 'Graphik, Inter, sans-serif',
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 800,
    sizes: {
      xsmall: '1.4rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '4.8rem',
      xlarge: '6.4rem',
      xxlarge: '7.2rem',
      huge: '9.6rem',
    },
  },
  spacings: {
    xxsmall: '2.4rem',
    xsmall: '3.6rem',
    small: '4.8rem',
    medium: '6.4rem',
    large: '9.6rem',
    xlarge: '11.2rem',
    xxlarge: '12rem',
    huge: '14.4rem',
  },
  layers: {
    base: 10,
    menu: 20,
    modal: 30,
    alwaysOnTop: 40,
    loading: 50,
  },
  borders: {
    xsmall: '1px',
    small: '2px',
    medium: '5px',
  },
  screen: {
    small: '576px',
    medium: '768px',
    large: '992px',
    xlarge: '1200px',
    xxlarge: '1400px',
  },
}

const theme = {
  lightTheme: {
    ...defaultConfig,
    colors: {
      primary: '#FFFFFF',
      secondary: '#111111',
      red: '#FF5A5F',
      darkRed: '#E75357',
      gray: 'rgba(17, 17, 17, 0.4)',
      lightGray: 'rgba(17, 17, 17, 0.6)',
      darkGray: 'rgba(17, 17, 17, 0.1)',
    },
  },
  darkTheme: {
    ...defaultConfig,
    colors: {
      primary: '#111111',
      secondary: '#FFFFFF',
      red: '#FF5A5F',
      darkRed: '#E75357',
      gray: 'rgba(255, 255, 255, 0.4)',
      lightGray: 'rgba(255, 255, 255, 0.6)',
      darkGray: 'rgba(255, 255, 255, 0.1)',
    },
  },
}

export type Theme = typeof theme.darkTheme
export default theme
