import React, { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";
import { Box, IconButton, InputBase } from "@mui/material";
import { IoMdSearch } from "react-icons/io";
import SearchList from "./SearchList";

// Search Bar Component

export default function Search({ data }) {
  const theme = useTheme();
  const [input, setInput] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  console.log(data);

  // UseEffect Hook to handle Search Requests

  useEffect(() => {
    if (input) {
      const handleSearch = () => {
        const filtered = data.books.filter((book) =>
          book.title.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredBooks(filtered);
      };
      handleSearch();
    }
  }, [input, data.books]);

  return (
    <Box position="relative" sx={{ width: { xs: "100%", sm: "50%" } }}>
      <Box display="flex" borderRadius="50px" border={2} width="100%">
        <IconButton
          type="button"
          sx={{ margin: "8px", background: theme.palette.primary.dark }}
        >
          <IoMdSearch color={theme.palette.primary.contrastText} />
        </IconButton>
        <InputBase
          placeholder="Search Everything in our catalog"
          sx={{ flex: 1, padding: "0 10px" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Box>
      <Box position="absolute" width="100%" zIndex={2}>
        {input && <SearchList data={filteredBooks} />}
      </Box>
    </Box>
  );
}
