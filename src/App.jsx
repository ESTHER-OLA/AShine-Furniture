import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import CartTab from "./Components/CartTab";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:slug" element={<Detail />} />
          <Route path="/carttab" element={<CartTab />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
