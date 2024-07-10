import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./containers/Dashboard";
import SearchBar from "./components/SearchBar";
import DrugSearch from "./containers/DrugSearch";
import DrugDetail from "./containers/DrugDetail";
import NoPage from "./containers/NoPage";
import Layout from "./containers/Layout";
import Introduction from "./components/Introduction";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="search" element={<DrugSearch />} />
            <Route path="detail" element={<DrugDetail />} />
            <Route path="*" element={<NoPage />} />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
