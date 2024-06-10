import "./App.css";
import Booklist from "./components/Booklist";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="Empowering Young Minds"
        caption="We believe that fostering a love for reading is essential for a child's
        academic and personal growth."
      />
      <Booklist />
    </>
  );
};

export default App;
