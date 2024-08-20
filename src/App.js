import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import * as Pages from "./Routes";

function App() {
  return (
    <div className="App">
      <br />
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Pages.HomePage />} />
          <Route path="/team" element={<Pages.Team />} />
          <Route path="/info" element={<Pages.Info />} />
          <Route path="/vision" element={<Pages.Vision />} />
          <Route path="*" element={<Pages.NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
