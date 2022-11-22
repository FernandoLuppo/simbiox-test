import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Home from "./components/pages/ts/Home";
import Movie from "./components/pages/ts/Movie";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id/:title/:vote_average/:backdrop_path/:overview" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
