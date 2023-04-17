import {BrowserRouter, Route, Routes} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/login/Login.jsx";
import Chat from "./pages/chatbox/Chat.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Login login={true}/> }/>
                <Route path={'/sign-up'} element={<Login login={false}/> }/>
                <Route path={'/chat'} element={<Chat /> }/>
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    );
};

export default App;