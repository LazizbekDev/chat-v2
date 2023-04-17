import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {signIn, signUp, reset} from "../../redux/auth/authSlice.js";
import {toast} from "react-toastify";
import "./Login.css"

const Login = ({login}) => {
    const navigate = useNavigate();
    const {user, isLoading,isError,isSuccess, message} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            navigate('/chat')
        }

        dispatch(reset())
    }, [dispatch, user, navigate, isSuccess, isError]);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name'),
            email = formData.get('email').toLocaleLowerCase(),
            password = formData.get('password');
        if (login) {
            dispatch(signIn({
                email, password
            }))
        } else {
            dispatch(signUp({
                name, email, password
            }))
        }
    }

    return (
        <div className="login-box">
            <h2>
                {login ? <>Sign In</> : <>Sign Up</>}</h2>
            <form id="form" autoComplete="off" onSubmit={onSubmit}>
                <div className="user-box">
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="name">Username</label>
                </div>
                {!login && (
                    <div className="user-box">
                        <input type="text" id="email" name="email" required />
                        <label htmlFor="email">Email</label>
                    </div>
                )}
                <div className="user-box">
                    <input type="password" name={"password"} id={"password"} required />
                    <label htmlFor={"password"}>Password</label>
                </div>
                <button type="submit">
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    join
                </button>
            </form>
        </div>
    );
};

export default Login;