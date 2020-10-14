import {
  createMuiTheme,
  colors,
} from 'material-ui'

const GOLDEN = '#FDC277'
const NAVY_DARK = '#171926'
const NAVY_LIGHT = '#404557'
const NAVY_LIGHTISH = '#2C2F3D'
const NAVY = '#242740'
const BURGUNDY = '#3b152c'
const KALE = '#3f5845'
const BROWN = '#8F663D'
const LIME = '#8F8F3D'
const GREEN_LIGHT = '#CFFFD9'
const BRIGHT_BLUE = '#58D1EB'


export const theme = createMuiTheme({
  palette: {
    primary: {
      light: NAVY_LIGHT,
      main: NAVY,
    },
    secondary: {
      main: GOLDEN
    },
    link: {main: BRIGHT_BLUE},
    error: {main: KALE},
    success: {main: KALE},
    info: {main: BROWN},
    warning: {main: LIME},

    text: {main: colors.grey['400'], light: colors.grey['400']},
    chip: {
      schedule: colors.green['A400'],
      skill: colors.lightBlue[400],
      location: colors.pink[400],
    },
    textPrimary: {main: colors.white},
    action: {main: colors.yellow},
  },
  overrides: {
    MuiTypography: {
      colorTextPrimary: {
        color: {main: BRIGHT_BLUE},
        // textColor: {main: colors.common.white},
      },
      button: {
        color: GOLDEN
      },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: GOLDEN,
      },
    },
    MuiTab: {
      textColorInherit: {
        color: GOLDEN,
      },
      root: {
        "&$selected": {
          color: GOLDEN,
        },
      }
    },
  },
})
