// Loader Component from Mui

import { Box, CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <Box display="flex" justifyContent="center">
      <CircularProgress />
    </Box>
  );
}
