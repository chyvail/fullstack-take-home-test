// Footer Component

import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";
import elloLogo from "../logo.svg";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{ background: theme.palette.primary.dark, textAlign: "center" }}
      p={4}
      mt={3}
    >
      <img src={elloLogo} alt="ello Logo" width={60} height={60} />
    </Box>
  );
}
