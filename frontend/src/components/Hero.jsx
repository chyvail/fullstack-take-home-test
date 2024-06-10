import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";
import Search from "./Search";

// Hero Component

export default function Hero({ title, caption }) {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      my={5}
    >
      <Typography
        variant="h3"
        sx={{ color: theme.palette.primary.dark, fontWeight: 800 }}
      >
        {title}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 600 }} my={3}>
        {caption}
      </Typography>
      <Search />
    </Box>
  );
}
