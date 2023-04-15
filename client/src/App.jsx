import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Chat from "./pages/chatbox/Chat.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Login login={true}/> }/>
                <Route path={'/chat'} element={<Chat /> }/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;