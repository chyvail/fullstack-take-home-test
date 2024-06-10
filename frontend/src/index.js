import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import { lightTheme, darkTheme } from "./theme";
import { AppContext } from "./contexts/appContext";
import { ApolloProvider } from "@apollo/client";
import { client } from "./utils/graghQLSetup";

const Root = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <AppContext.Provider value={{ toggleTheme, isDarkMode }}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
