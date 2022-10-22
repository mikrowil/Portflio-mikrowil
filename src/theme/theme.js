import { createTheme } from "@mui/material";
import { responsiveFontSizes } from "@mui/material";

const PRIMARY_50 = "#f3e6f6"
const PRIMARY_100 = "#e2bfea"
const PRIMARY_200 = "#ce94de"
const PRIMARY_300 = "#bf5dd7"
const PRIMARY_700 = "#521573"

const WHITE = '#fff'
const WHITE_HIGH = 'rgba(255,255,255,0.8)'
const WHITE_MEDIUM = 'rgba(255,255,255,0.6)'
const WHITE_LOW = 'rgba(255,255,255,0.4)'

const theme = createTheme({
  palette: {
    background: {
      default: "#fff"
    },
    primary: {
      main: "#bc6bd0",
      "50": PRIMARY_50,
      "100": PRIMARY_100,
      "200": PRIMARY_200,
      "300": PRIMARY_300,
      "400": "#ad4ac5",
      "500": "#9e2cba",
      "600": "#9029b4",
      "700": "#3d0d57",
      "800": "#1e0833",
      "900": "#0e0328",
    },
    secondary: {
      main: "#7fd06b",
      "50": "#edf9ea",
      "100": "#d3efcb",
      "200": "#b5e4a9",
      "300": "#97d986",
      "400": "#7fd06b",
      "500": "#68c751",
      "600": "#59b749",
      "700": "#33832e",
      "800": "#031e06",
      "900": "#000c04",
    },
    info: {
      main: "#896bd0",
      "50": "#ebe5f7",
      "100": "#cdc0ea",
      "200": "#ab96dd",
      "300": "#896bd0",
      "400": "#6f4bc6",
      "500": "#532cba",
      "600": "#4928b4",
      "700": "#3921ab",
      "800": "#281ba3",
      "900": "#000f95",
    },
    error: {
      main: "#d06b7f",
      "50": "#f6e4e8",
      "100": "#ebbbc6",
      "200": "#de91a2",
      "300": "#d06b7f",
      "400": "#c55468",
      "500": "#c03f51",
      "600": "#b03b4e",
      "700": "#9c364a",
      "800": "#883045",
      "900": "#66253b",
    },
    warning: {
      main: "#d0bc6b",
      "50": "#f4efdb",
      "100": "#e3d6a4",
      "200": "#d0bc6b",
      "300": "#bea42e",
      "400": "#b49300",
      "500": "#aa8300",
      "600": "#ab7800",
      "700": "#ab6900",
      "800": "#aa5900",
      "900": "#a93b00",
    },
    nonPalette:{
      WHITE:WHITE,
      WHITE_HIGH,
      WHITE_MEDIUM,
      WHITE_LOW,
    }
  },
  typography: {
    allVariants: {
      color: "#0e0328"
    },
    button: {
      letterSpacing: 1.25,
    },
    caption: {
      letterSpacing: 1.25,
      color: "rgba(14,3,41,0.4)"
    }
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: PRIMARY_50,
            '& .MuiOutlinedInput-notchedOutline': {
              border: `1px solid ${PRIMARY_200}`,
            }
          },
          '&.Mui-focused': {
            backgroundColor: WHITE,
            '& .MuiOutlinedInput-notchedOutline': {
              border: `2px solid ${PRIMARY_300}`,
            }
          }
        }
      }
    },
    MuiSpeedDial: {
      styleOverrides: {
        fab: {
          height:50,
          width:50,
          backgroundColor: WHITE,
          border: `1px solid ${PRIMARY_300}`,

          '&:hover': {
            backgroundColor: PRIMARY_50,
            boxShadow: "none",
            '& .material-symbols-rounded': {
              color: PRIMARY_700,
            }
          }
        },
      }
    },
    MuiSpeedDialAction: {
      styleOverrides: {
        fab: {
          backgroundColor: WHITE,
          border: `1px solid ${PRIMARY_300}`,
          '&:hover': {
            backgroundColor: PRIMARY_50,
            boxShadow: "none",
            '& .material-symbols-rounded': {
              color: PRIMARY_700,
            }
          }
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined"
      }
    }
  }
})

export default responsiveFontSizes(theme)