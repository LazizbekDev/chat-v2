import axios from "axios";
import {useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Chat from "./pages/chatbox/Chat";

const App = () => {
  useEffect(() => {
    const dataFetch = async () => {
      const res = await axios.get("/api");
      console.log(res)
    };

    dataFetch()
  }, [])
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Login login={true}/> }/>
          <Route path={'/chat'} element={<Chat /> }/>
        </Routes>
      </BrowserRouter>
  )
}

export default App