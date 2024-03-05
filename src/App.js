import Landing from "./pages/landing";
import Home from "./pages/home"
import Map from "./pages/map";
import Play from "./pages/play";
import Friends from "./pages/friends";
import Settings from "./pages/settings";
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={< Landing /> } />
        <Route path='/home' element={<Home />} />
        <Route path='/map' element={<Map />} />
        <Route path='/play' element={<Play />} />
        <Route path='/friends' element={<Friends />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
