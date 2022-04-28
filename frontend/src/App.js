import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Containers/LandingPage.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/about" element={<LandingPage/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
