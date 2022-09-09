
import './App.css';
import { Routes, Route } from "react-router-dom"
import List from './pages/List';
import Sellpage from './pages/Sellpage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/sell" element={<Sellpage />} />

      </Routes>
    </div>
  );
}

export default App;
