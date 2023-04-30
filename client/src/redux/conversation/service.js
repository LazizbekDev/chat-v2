import axios from "axios";

const sendMessage = async (data) => {
    const res = await axios.post('/api/message', data);
    return res.data
}

const message = {
    sendMessage
}

export default message;