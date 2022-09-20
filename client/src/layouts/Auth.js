import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../views/auth/Login";
import { Register } from "../views/auth/Register";
import FooterSmall from "../components/Footers/FooterSmall";
import Navbar from "../components/Navbars/AuthNavbar";

export function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" +
                require("../assets/img/register_bg_2.png").default +
                ")",
            }}
          ></div>
          <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} /> />
            <Route path="/" element={<Navigate replace to="/auth/login" />} />
          </Routes>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
