import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import { Register } from "./views/user/Register/Register";
import { Login } from "./views/user/Login/Login";
import { Dashboard } from "./views/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/home/register" element={<Register />} />
          <Route path="/home/login" element={<Login />} />
        </Route>
        <Route path={"dashboard"} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
