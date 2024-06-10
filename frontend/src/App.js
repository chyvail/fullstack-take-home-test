import "./App.css";
import Button from "@mui/material/Button";
import elloLogo from "./logo.svg";

const App = ({ toggleTheme }) => (
  <div>
    <Button variant="contained" onClick={toggleTheme}>
      Toggle Theme
    </Button>
    <img src={elloLogo} alt="ello Logo" />
  </div>
);

export default App;
