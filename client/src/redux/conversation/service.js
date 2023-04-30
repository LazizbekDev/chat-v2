import axios from "axios";

const send = async (data) => {
    const res = await axios.post('/api/message', data);
    return res.data
}

const get = async (messageData) => {
    const res = await axios.post('/api/messages', messageData);
    return res.data
}

const message = {
    send,
    get
}

export default message;