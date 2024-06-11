import { Box } from "@mui/material";
import elloLogo from "../logo.svg";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useContext } from "react";
import { AppContext } from "../contexts/appContext";
import { useTheme } from "@mui/material";

// Navbar Component with light-dark mode toggle functionality

export default function Navbar() {
  const { toggleTheme, isDarkMode } = useContext(AppContext);
  const theme = useTheme();

  // re-usable icon props
  const iconProps = {
    size: 25,
    onClick: toggleTheme,
    cursor: "pointer",
    color: theme.palette.primary.main,
  };

  return (
    <Box
      className="custom-shadow"
      sx={{ background: theme.palette.primary.dark }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        mx={5}
        alignItems="center"
      >
        <Box>
          <img src={elloLogo} alt="ello Logo" width={60} height={60} />
        </Box>
        <Box>
          {isDarkMode ? (
            <MdDarkMode {...iconProps} />
          ) : (
            <MdLightMode {...iconProps} />
          )}
        </Box>
      </Box>
    </Box>
  );
}
