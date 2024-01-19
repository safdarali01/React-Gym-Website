import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedPartners from "./components/TrustedPartners";
import FitnessGoal from "./components/FitnessGoal";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedPartners />
      <FitnessGoal/>
    </>
  );
}

export default App;
