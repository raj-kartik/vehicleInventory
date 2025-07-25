import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Inbox from "./pages/Inbox";
import ExistingProduct from "./pages/Inventory/AllProduct/ExistingProduct";
import Dashboard from "./pages/Dashboard";

import "./App.css"; 
import Header from "./components/Header";
import Overview from "./pages/Inventory/Overview";
import ProductSearch from "./pages/Inventory/ProductSearch";
import NewProduct from "./pages/Inventory/NewProduct";

const App = () => {
  return (
    <Router>
      <div className="app-layout" >
            <Sidebar />
          <div className="content-area">
            <Header/>
            <div className="app-content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/inbox" element={<Inbox />} />
                <Route path="/inventory/overview" element={<Overview />} />
                <Route path="/inventory/search" element={<ProductSearch />} />
                <Route path="/inventory/all-products/new" element={<NewProduct />} />
                <Route path="/inventory/all-products/existing" element={<ExistingProduct />} />
              </Routes>
            </div>
          </div>
      </div>
    </Router>
  );
};

export default App;
