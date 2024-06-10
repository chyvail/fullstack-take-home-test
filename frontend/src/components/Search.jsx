import React from "react";
import { useTheme } from "@emotion/react";
import { Box, IconButton, InputBase } from "@mui/material";
import { IoMdSearch } from "react-icons/io";

// Search Bar Component

export default function Search() {
  const theme = useTheme();
  return (
    <Box display="flex" borderRadius="50px" width="40%" border={2}>
      <IconButton
        type="button"
        sx={{ margin: "8px", background: theme.palette.primary.dark }}
      >
        <IoMdSearch color={theme.palette.primary.contrastText} />
      </IconButton>
      <InputBase
        placeholder="Search Everything in our catalog"
        sx={{ flex: 1, padding: "0 10px" }}
      />
    </Box>
  );
}
