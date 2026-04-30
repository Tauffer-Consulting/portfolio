const theme = {
  media: {
    smallScreen: '900px',
    mobile: '768px',
    smallMobile: '376px',
  },

  containerWidth: '1600px',

  darkTheme: {
    colors: {
      footerBg: 'rgb(41,48,55)',
      black: '#151515',
      white: '#FCFCFC',
      darkWhite: '#E9EBED',
      lightGray: '#c4c9cf',
      lighterGray: '#dddddd',
      lightmediumGray: '#aaaeb3',
      mediumGray: '#969ca3',
      darkGray: '#333534',
      mediumDark: '#6d747d',
      ButtonText: '#736c5d',
      ButtonTextBorder: '#534c44',
      mediumBlue: '#566d8f',
      darkerBlue: '#222831',
      hoverLinkColor: '#c4c9cf',
      inputBorder: '#27323A',
      inputBorderFocus: '#2F9086',
      hoverMenuLine: '#2F8886',
      purpleLink: '#2C061F',
      redLink: '#7D0633',
      lightredLink: '#b00928',
      darkerBrown: '#393232',
      mediumBrown: '#4D4545',
      toolsCardBg: '#F2E3D5',
      toolsCardSelectedBg: '#ECF5FD',
      toolsCardImgBg: '#EAECED',
      toolsCardImgSelectedBg: '#E2EBF3',
      buttonBlue: '#1A1A2E',
      buttonBlueText: '#C5E6FE',
      buttonBlueHover: '#4A4A7D',
      buttonBlueHoverTxt: '#FAFAFA',
      adsGradientDark: '#382933',
      adsGradientLight: '#59405C',
      borderYellow: '#FDE5BA',
      borderOrange: '#EE4540',
      filtersCard: '#E3FAEF',
      cardHover: 'rgba(89, 64, 92, 1)',
      serviceDecorator: ['#69B1FF', '#63B8B0', '#FFEBA3', '#FBD8D7'],
      blue50: '#ECEFF1',
      blue100: '#CFD8DC',
      blue200: '#B0BEC5',
      blue300: '#90A4AE',
      blue400: '#78909C',
      blue500: '#607D8B',
      blue600: '#546E7A',
      blue700: '#455A64',
      blue800: '#37474F',
      blue900: '#263238',
    }
  },

  darkPurpleTheme: {
    colors: {
      black: '#151515',
      white: '#FCFCFC',
      lightGray: '#c4c9cf',
      mediumGray: '#969ca3',
      mediumDark: '#6d747d',
      darkGray: '#333534',
      mediumBlue: '#566d8f',
      darkerBlue: '#222831',
      hoverLinkColor: '#c4c9cf',
      inputBorder: '#27323A',
      inputBorderFocus: '#2F8886',
      hoverMenuLine: '#2F8886',
      purpleLink: '#2C061F',
      redLink: '#7D0633',
      darkerBrown: '#393232',
      mediumBrown: '#4D4545',
      toolsCardBg: '#F2E3D5',
      categoryBtnBorder: '#6e5f5f',
      categoryBtnText: '#76756f',
      toolsCardTitle: '#B7B7B7',
      toolsCardSelectedBg: '#ECF5FD',
      toolsCardImgBg: '#EAECED',
      toolsCardImgSelectedBg: '#E2EBF3',
      buttonBlue: '#1A1A2E',
      buttonBlueText: '#C5E6FE',
      buttonBlueHover: '#4A4A7D',
      buttonBlueHoverTxt: '#FAFAFA',
      adsGradientDark: '#382933',
      adsGradientLight: '#59405C',
      borderYellow: '#FDE5BA',
      borderOrange: '#EE4540',
      filtersCard: '#E3FAEF',
      serviceDecorator: ['#69B1FF', '#63B8B0', '#FFEBA3', '#FBD8D7'],
      blue50: '#ECEFF1',
      blue100: '#CFD8DC',
      blue200: '#B0BEC5',
      blue300: '#90A4AE',
      blue400: '#78909C',
      blue500: '#607D8B',
      blue600: '#546E7A',
      blue700: '#455A64',
      blue800: '#37474F',
      blue900: '#263238',
    }
  },

  fontSize: {
    small: '1.3em',
    paragraph: '1.5em',
    title: '3.5em',
    subtitle: '',
  },

  fontStyle: {
    sansSerif: "'Fira Sans', sans-serif",
    serif: "'Merriweather', serif",
  },

  styles: {
    borderRadius: '0.7rem',
  },

  transitions: {
    cubic: time => {
      return `all ${time} cubic-bezier(0.25, 0.46, 0.45, 0.94)`
    },
    cubic2: time => {
      return `all ${time} cubic-bezier(.215,.61,.355,1)`
    },
    cubic3: time => {
      return `all ${time} cubic-bezier(.86,0,.07,1)`
    },
    ease: time => {
      return `all ${time} ease-in-out`
    }
  }
};

export default theme;
