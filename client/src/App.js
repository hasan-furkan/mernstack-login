import {Navbar} from "./views/navbar/index"
import {Card} from "./views/card";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./views/Home";
import {Login} from "./views/user/Login/Login";
import {Register} from "./views/user/Register/Register";


function App() {

    return (

  <BrowserRouter>
      <div className="container-fluid">
          <div className="container">
              <Navbar/>
          </div>
        <Routes>
            <Route path="/" element={<Home/> } />
            <Route path={"/register"} element={< Register />} />
            <Route path={"/login"} element={< Login />} />
        </Routes>
      </div>
  </BrowserRouter>
    );
}

export default App;
