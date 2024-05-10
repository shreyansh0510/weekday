import { ThemeProvider, Typography, createTheme } from "@mui/material";
import Main from "./pages/main/Main";
import { Provider } from "react-redux";
import store from "./redux/store/index";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // customize primary colors
    },
  },
  // overrides: {},
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          // fontSize: 10,
        },
        inputRoot: {
          // fontSize: 10,
        },
        input: {
          fontSize: 14,
        },
        popupIndicator: {
          transform: "none",
          "&:hover": {
            pointerEvent: "none",
            backgroundColor: "rgba(255,255,255, 1)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          height: 22,
          fontSize: 11,
        },
        inputRoot: {},
        input: {},
      },
    },
    MuiBadge: {
      styleOverrides: {
        colorContext: {
          color: "red",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {},
        inputRoot: {},
        input: {},
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          "&:hover": {
            backgroundColor: "var(--theme-color)",
            boxShadow: "rgba(0, 0, 0, 0)",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {},
        inputRoot: {},
        input: {
          margin: -3,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "20px", // customize border radius
          textTransform: "none", // customize text transform
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          "&:hover": {
            cursor: "pointer",
            transform: "scale(1.01)",
          },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          color: "red",
          pb: 10,
          indicator: {
            backgroundColor: "red", // Change indicator color
          },
        },
      },
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "Arial",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  overrides: {},
});

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Typography>
            <Main />
          </Typography>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
