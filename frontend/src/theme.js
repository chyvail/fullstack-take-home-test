import { createTheme } from "@mui/material/styles";

const customPalette = {
  primary: {
    main: "#5ACCCC",
    contrastText: "#FFFFFF",
    dark: "#335C6E",
    light: "#FABD33",
  },
  secondary: {
    main: "#cffafa",
    light: "#f76434",
    dark: "#4aa088",
    contrastText: "#faad00",
  },
};

const lightTheme = createTheme({
  palette: {
    mode: "light",
    ...customPalette,
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    ...customPalette,
  },
});

export { lightTheme, darkTheme };
