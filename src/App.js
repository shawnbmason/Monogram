import "./styles.css";
import Main from "./componets/main.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Box1 from "./componets/box1.js";
import Box2 from "./componets/box2.js";
import Box3 from "./componets/box3.js";
import Box4 from "./componets/box4.js";
import NavBar from "./componets/navbar.js";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/box1" element={<Box1 />} />
        <Route path="/box2" element={<Box2 />} />
        <Route path="/box3" element={<Box3 />} />
        <Route path="/box4" element={<Box4 />} />
      </Routes>
    </BrowserRouter>
  );
}
