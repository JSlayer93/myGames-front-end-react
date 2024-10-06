import { NavLink, Route, Routes } from "react-router-dom";
import "./index.css"
import Home from "./pages/home";
import About from "./pages/about";
import Wrong from "./pages/wrong";
import Header from "./components/general/header";
import Contact from "./pages/contact";
import Game from "./pages/game";
import Game_update from "./components/gamePage/gameupdate";
import Add from "./pages/add";
import Filter_games from "./pages/filter";



function App() {
  return (
    <div className="App bg-[#272635]">
      <Header />
      {/* defining routes */}
      <Routes>
        {/* Route to homepage */}
        <Route path="/" element={<Home />}/>
        {/* Route to search page */}
        <Route path="/search/:id" element={<Home />}/>
        {/* Route to about page */}
        <Route path="/about" element={<About />}/>
        {/* Route to add game page */}
        <Route path="/add" element={<Add />}/>
        {/* Routes to game related pages */}
        <Route path="/game">
          <Route path=":id" element={<Game />}/>
          <Route path="update/:id" element={<Game_update />}/>
        </Route>
        <Route path="contact" element={<Contact />}/>
        {/* Route to filter page */}
        <Route path="filter" element={<Filter_games />}/>
        {/* Handling wrong path */}
        <Route path="*" element={<Wrong />}/>
      </Routes>
    
    </div>
  );
}

export default App;
