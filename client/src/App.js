import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "./layouts/Auth";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import { Register } from "./views/auth/Register";
import { Login } from "./views/auth/Login";
import { Dashboard } from "./views/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
        </Route>
        <Route path={"dashboard"} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
