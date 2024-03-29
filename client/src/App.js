/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {Switch, Route, Redirect} from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Profile from "./pages/Profile";
import {SignUp} from "./pages/SignUp";
import {SignIn} from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from "react-toastify";
import {VerificationEmail} from "./pages/VerificationEmail";

import "./i18n"
import {useSelector} from "react-redux";

function App() {
    const user = useSelector(state => state.auth.user)
    return (
        <div className="App">
            <Switch>
                <Route path="/sign-up" exact component={SignUp}/>
                <Route path="/sign-in" exact component={SignIn}/>
                <Route path="/verification-email" component={VerificationEmail}/>
                {user.name !== undefined && user.email !== undefined ?
                    <Main>
                        <Route exact path="/dashboard" component={Home}/>
                        <Route exact path="/tables" component={Tables}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Redirect from="*" to="/dashboard"/>
                    </Main>
                    :
                    <Main>
                        <Redirect from="*" to="/sign-in"/>
                    </Main>
                }
            </Switch>
            <ToastContainer/>
        </div>
    );
}

export default App;
