
import './App.css';
import { Routes, Route } from "react-router-dom"
import List from './pages/List';
import Sellpage from './pages/Sellpage';
import PageWithPeerboard from './pages/PageWithPeerboard';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/sell" element={<Sellpage />} />
        <Route path="/pageWithPeerboard" element={<PageWithPeerboard />} />


      </Routes>
    </div>
  );
}

export default App;
