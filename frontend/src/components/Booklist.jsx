import { useQuery } from "@apollo/client";
import { Box, Chip, Typography, Button } from "@mui/material";
import { GET_BOOKS } from "../graphql/queries";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import Search from "./Search";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import { toast, Toaster } from "react-hot-toast";
import { useTheme } from "@emotion/react";

export default function Booklist() {
  const { loading, error, data } = useQuery(GET_BOOKS); // Apollo Client hook

  // useState hooks

  const [favorites, setFavorites] = useState([]);
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 12;

  const theme = useTheme();

  // Set displayed books on data fetch

  useEffect(() => {
    if (data) {
      setDisplayedBooks(data.books.slice(0, booksPerPage));
    }
  }, [data]);

  // Toggle favorite status and show toast notifications

  const handleClick = (book) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.title === book.title)) {
        toast.success(`Removed Book from Favorites`);
        return prevFavorites.filter((fav) => fav.title !== book.title);
      } else {
        toast.success(`Added Book to Favorites`);
        return [...prevFavorites, book];
      }
    });
  };

  // Handle chip click to show all books or favorites

  const handleChipClick = (type) => {
    if (type === "all") {
      setDisplayedBooks(data.books.slice(0, currentPage * booksPerPage));
      setShowFavorites(false);
    } else {
      setDisplayedBooks(favorites);
      setShowFavorites(true);
    }
  };

  // Paginations

  const loadMoreBooks = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    setDisplayedBooks(data.books.slice(0, (currentPage + 1) * booksPerPage));
  };

  console.log("favorites is", displayedBooks);

  if (loading) return <Loader />;
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
        {(showFavorites ? favorites : displayedBooks).map((book, index) => (
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

      {/* Load More Button */}

      {!showFavorites && displayedBooks.length < data.books.length && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Button
            variant="contained"
            onClick={loadMoreBooks}
            sx={{ background: theme.palette.primary.dark }}
          >
            Load More
          </Button>
        </Box>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </Box>
  );
}
