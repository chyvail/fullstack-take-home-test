import "./App.css";
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
    </>
  );
};

export default App;
