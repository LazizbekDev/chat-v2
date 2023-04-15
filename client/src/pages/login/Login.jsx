import "./Login.css"
const Login = ({login}) => {
    return (
        <div className="login-box">
            <h2>{login ? "Login" : "Sign up"}</h2>
            <form id="form" autoComplete="off">
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