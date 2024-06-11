import { useQuery } from "@apollo/client";
import { Box, Chip, Typography } from "@mui/material";
import { GET_BOOKS } from "../graphql/queries";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import Search from "./Search";
import { useState } from "react";

// BookList Component
export default function Booklist() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [favorites, setFavorites] = useState([]);
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const handleClick = (book) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.title === book.title)) {
        return prevFavorites.filter((fav) => fav.title !== book.title);
      } else {
        return [...prevFavorites, book];
      }
    });
  };

  const handleChipClick = (type) => {
    if (type === "all") {
      setDisplayedBooks(data.books);
      setShowFavorites(false);
    } else {
      setDisplayedBooks(favorites);
      setShowFavorites(true);
    }
  };

  console.log("favorites is", displayedBooks);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Box mx={5}>
      {/* Search Component */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mb={4}
      >
        <Search data={data} />
      </Box>

      <Box
        mb={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Chip
          label={`All Books (${data.books.length || 0})`}
          onClick={() => handleChipClick("all")}
        />
        <Chip
          label={`Favorites (${favorites.length || 0})`}
          icon={<MdFavorite />}
          onClick={() => handleChipClick("favorites")}
        />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          columnGap: "10px",
          rowGap: "10px",
          position: "relative",
        }}
      >
        {(showFavorites ? favorites : data.books).map((book, index) => (
          <Box item xs={4} key={index}>
            <Box
              component="img"
              src={book.coverPhotoURL}
              alt={book.title}
              sx={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                marginBottom: "10px",
                borderRadius: "13px",
              }}
            />
            <Box sx={{ textAlign: "left", position: "absolute" }}>
              {favorites.some((fav) => fav.title === book.title) ? (
                <MdFavorite
                  size={25}
                  cursor="pointer"
                  onClick={() => handleClick(book)}
                />
              ) : (
                <MdFavoriteBorder
                  size={25}
                  cursor="pointer"
                  onClick={() => handleClick(book)}
                />
              )}
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: "600" }}>
                {book.title}
              </Typography>
              <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
                {book.author}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
