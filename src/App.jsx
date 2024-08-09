import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./static/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Home/>
      <Routes>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
