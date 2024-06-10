import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

test("renders Navbar Component", () => {
  render(<Navbar />);
  // Check if the logo is rendered
  const logo = screen.getByAltText(/ello Logo/i);
  expect(logo).toBeInTheDocument();
});
