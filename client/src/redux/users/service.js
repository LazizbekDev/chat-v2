import axios from "axios";

const allUsers = async () => {
    const res = await axios.get('api/all');
    return res.data
}

const service = {
    allUsers
}

export default service;