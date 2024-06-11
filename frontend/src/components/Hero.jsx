import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";

// Hero Component with dynamic title and caption

export default function Hero({ title, caption }) {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mx={5}
      mt={3}
    >
      <Typography
        variant="h3"
        sx={{
          color: theme.palette.primary.dark,
          fontWeight: 800,
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontWeight: 600, textAlign: "center" }}
        my={3}
      >
        {caption}
      </Typography>
    </Box>
  );
}
