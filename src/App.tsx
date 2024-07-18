import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";

function App() {
  const [favs, setFavs] = useState<string[]>([]);

  return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home favs={favs} setFavs={setFavs} />} />
          <Route path="/favourites" element={<Favourites favs={favs} />} />
        </Routes>
      </div>
  );
}

export default App;
