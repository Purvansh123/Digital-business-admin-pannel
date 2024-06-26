import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Layout from "./Components/Layouts/Layout";
import Calender from "./Pages/Calender/Calender";
import Boards from "./Pages/Board/Boards";
import DataGrid from "./Pages/DataGrid/DataGrid";


function App() {
  return (
    <div id="dashboard">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="Dashboard" element={<Dashboard />}></Route>
            <Route path="Calender" element={<Calender />}></Route>
            <Route path="Board" element={<Boards />}></Route>
            <Route path="Users" element={<DataGrid />}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
