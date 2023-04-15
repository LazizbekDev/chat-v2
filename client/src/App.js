import Login from "./pages/login/Login";
import axios from "axios";
import {useEffect} from "react";

const App = () => {
  useEffect(() => {
    const dataFetch = async () => {
      const res = await axios.get("/api");
      console.log(res)
    };

    dataFetch()
  }, [])
  return (
      <Login login={true}/>
  )
}

export default App