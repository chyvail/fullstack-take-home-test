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

const customTypography = {
  h3: {
    fontSize: 34,
  },
};

const lightTheme = createTheme({
  palette: {
    mode: "light",
    ...customPalette,
  },
  typography: {
    ...customTypography,
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    ...customPalette,
  },
  typography: {
    ...customTypography,
  },
});

export { lightTheme, darkTheme };
