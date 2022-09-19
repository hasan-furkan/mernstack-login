import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./user/Login/Login";
import { Register } from "./user/Register/Register";
import FooterSmall from "../components/Footers/FooterSmall";
import Navbar from "../components/Navbars/AuthNavbar";

export function Home() {
  return (
    <>
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
            <Route path="/home/login" element={<Login />} />
            <Route path="/home/register" element={<Register />} /> />
            <Route
              path="/"
              element={<Navigate replace to="/home/register" />}
            />
          </Routes>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
