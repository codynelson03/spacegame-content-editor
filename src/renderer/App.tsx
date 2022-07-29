import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from 'renderer/components/home/Homepage';
import ItemEditor from 'renderer/components/items/ItemEditor';
import ReactMenuListener from 'renderer/components/ReactMenuListener';
import './App.css';

export default function App() {
  return (
    <Router>
      <ReactMenuListener />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/items" element={<ItemEditor />} />
      </Routes>
    </Router>
  );
}
