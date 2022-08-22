import { Routes, Route } from "react-router-dom";
import Create from './components/Create' 
import Search from './components/Search' 
import Update from './components/Update' 
import Delete from './components/Delete' 
import Home from './components/Home' 
import Error from './components/Error' 
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/create" element={<Create />} exact />
        <Route path="/search" element={<Search />} exact />
        <Route path="/update" element={<Update />} exact />
        <Route path="/delete" element={<Delete />} exact />
        <Route path="*" element={<Error />} exact />
      </Routes>
    </>
  );
}

export default App;
