import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Search from "../components/Search";

// Create a theme instance
const theme = createTheme();

test("renders Search Component", () => {
  render(
    <ThemeProvider theme={theme}>
      <Search />
    </ThemeProvider>
  );

  // Check if the input element with the placeholder is in the
  expect(
    screen.getByPlaceholderText("Search Everything in our catalog")
  ).toBeInTheDocument();

  // Check if the search icon button is in the document
  expect(screen.getByRole("button")).toBeInTheDocument();
});
