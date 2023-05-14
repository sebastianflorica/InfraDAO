import Home from "./components/Home";
import Launch from "./components/Launch";
import Join from "./components/Join";
import InfrastructureDAOForm from "./components/Projectform";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BuyToken } from "./components/Buytoken";
import VotingPage from "./components/VotingPage";

const projects = [
  {
    id: 1,
    title: "Building a new bridge",
    description: "Constructing a new bridge to connect two cities",
    votes: 0,
  },
  {
    id: 2,
    title: "Renovating public schools",
    description: "Upgrading and renovating public schools in the area",
    votes: 0,
  },
  {
    id: 3,
    title: "Installing solar panels",
    description: "Equipping public buildings with solar panels for energy efficiency",
    votes: 0,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/launch" element={<Launch/>} />
        <Route path="/join" element={<Join/>} />
        <Route path="/submit" element={<InfrastructureDAOForm/>} />
        <Route path="/buytoken" element={<BuyToken />} />
        <Route path="/vote" element={<VotingPage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
