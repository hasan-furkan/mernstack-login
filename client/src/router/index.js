import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import {Home} from "../views/Home"

export default function appNavigation() {
    return (
        <div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Contacts</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/home" element={<Home />} />
                </Routes>
            </div>
        </div>
    );
}