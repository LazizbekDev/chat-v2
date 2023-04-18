import {Link, Navigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {signIn, signUp, reset} from "../../redux/auth/authSlice.js";
import {toast} from "react-toastify";
import "./Login.css"

const Login = ({login}) => {
    const [navigate, setNavigate] = useState(false);
    const {user, isLoading,isError,isSuccess, message} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            setNavigate(true)
        }

        dispatch(reset())
    }, [dispatch, user, navigate, isSuccess, isError]);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name'),
            email = formData.get('email')?.toLowerCase(),
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
            {navigate && <Navigate to={'/chat'} replace/> }
            <h2>
                {login ? <>Sign In</> : <>Sign Up</>}</h2>
            <form id="form" autoComplete="off" onSubmit={onSubmit}>
                {!login && (
                    <div className="user-box">
                        <input type="text" id="name" name="name" />
                        <label htmlFor="name">Username</label>
                    </div>
                )}
                <div className="user-box">
                    <input type="text" id="email" name="email" required />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="user-box">
                    <input type="password" name={"password"} id={"password"} required />
                    <label htmlFor={"password"}>Password</label>
                </div>
                <button type="submit" disabled={isLoading}>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    {isLoading ? "Wait" : "Join"}
                </button>

                <Link to={login ? '/sign-up' : '/'} replace={true} className={'helper-text grad_pb text-gradient'}>
                    {login ? "Sign-up" : "Sign-in"}
                </Link>

            </form>
        </div>
    );
};

export default Login;