import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bodysection from './bodysection';
import Sidebar from './sidebar';
import Table from './table';

function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>
        <Sidebar />
        <div id='content-wrapper' className="d-flex flex-column">
          <Routes>
            <Route path="/dashboard" element={<Bodysection />} />
            <Route path="/table" element={<Table />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
