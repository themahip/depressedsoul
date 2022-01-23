import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav/Nav";
import Mainpage from "./components/mainpage/Mainpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discussionpage from "./components/discussionplatform/Discussionpage";
import Whatwedopage from "./components/whatwedo/Whatwedopage";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Mainpage />} />
          <Route path="/discussion" exact element = {<Discussionpage/>}/>
          <Route path="/whatwedo" exact element={<Whatwedopage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
