import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import { GET_BOOKS } from "../graphql/queries";

// BookList Component
export default function Booklist() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <Box>
      {data.books.map((book) => (
        <h6>{book.author}</h6>
      ))}
    </Box>
  );
}
