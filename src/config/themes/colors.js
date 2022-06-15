// export default {
//   primaryColor: '#ca1827',
//   darkerPrimaryColor: '#0A88C0',
//   secondaryColor: '#FF6600',
//   white: '#ffffff',
//   black: '#2c3e50',
// };

export const palette = {
  primaryColor: '#ca1827',
  secondaryColor: '#FF6600',
  white: '#ffffff',
  black: '#000000',
  grey:"#9aa0a6",
  lightGrey:"#f0f0f0",
  darkGrey:"#262626"

}

export const theme = {
  colors: {
    primaryColor: palette.primaryColor,
    secondaryColor:palette.secondaryColor,
    white: palette.white,  
    black:palette.black,
    foreground: palette.lightGrey,
    grey:palette.grey,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
    darkGrey:palette.darkGrey
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontFamily: 'Raleway',
      fontSize: 36,
      fontWeight: 'bold',
    },
    body: {
      fontFamily: 'Merriweather',
      fontSize: 16,
    },
  }
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.black,
    foreground: palette.white,
  }
}
