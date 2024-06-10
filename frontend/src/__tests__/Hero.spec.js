import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Hero from "../components/Hero";

// Create a theme instance
const theme = createTheme();

test("renders Hero Component", () => {
  render(
    <ThemeProvider theme={theme}>
      <Hero title="Test Title" caption="Test Caption" />
    </ThemeProvider>
  );
  // check if title and caption is in document
  expect(screen.getByText("Test Title")).toBeInTheDocument();
  expect(screen.getByText("Test Caption")).toBeInTheDocument();
});
