import axios from "axios";

const signUp = async (userData) => {
    const res = await axios.post('api/sign-up', userData);
    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data));
    }
    return res.data
}
const signIn = async (userData) => {
    const res = await axios.post('api/sign-in', userData);
    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data));
    }
    return res.data
}

const logOut = () => localStorage.removeItem('user');

const auth = {
    signUp,
    signIn,
    logOut
}

export default auth