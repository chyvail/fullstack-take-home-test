import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";

// Search List Component

export default function SearchList({ data }) {
  const theme = useTheme();
  return (
    <Box
      mt={2}
      borderRadius={2}
      width="100%"
      sx={{
        maxHeight: "250px",
        overflowY: "scroll",
      }}
      className="custom-shadow"
    >
      {data.map((book, index) => (
        <Box
          display="flex"
          p={1}
          key={index}
          sx={{ background: `${theme.palette.primary.contrastText}` }}
        >
          <Box
            component="img"
            src={book.coverPhotoURL}
            alt={book.title}
            sx={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              marginBottom: "10px",
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          />
          <Box ml={1}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "600",
              }}
              color="primary"
            >
              {book.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ textTransform: "uppercase" }}
              color="primary"
            >
              {book.author}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
