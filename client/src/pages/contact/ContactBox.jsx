import Contact from "../../components/Contact.jsx";
import {Link, Navigate} from "react-router-dom";
import {useState} from "react";
import { SlClose } from "react-icons/sl";
import {BiLogOutCircle, BiMenuAltLeft} from "react-icons/bi";
import "./contact.css"
import {useDispatch, useSelector} from "react-redux";
import {logOut, reset} from "../../redux/auth/authSlice.js";

const ContactBox = () => {
    const [close, setClose] = useState(false);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [navigate, setNavigate] = useState(false);

    const logout = () => {
        dispatch(logOut());
        dispatch(reset());
        setNavigate(true)
    }

    const closeHandler = () => {
        setClose((prevState) => !prevState)
    }

    return (
        <div className={`phoneWrapper ${close && "phoneWrapperMenu"}`}>

            <div className={`${!close ? "phone" : "phone-closed"}`}>
                <div className="phone_head">
                    {!close && (
                        <div className="title">{user?.name}</div>
                    )}
                    <button
                        onClick={closeHandler}
                        className={`${close && "open-btn"}`}>
                        {!close ? <SlClose /> : <div className={'open-handle'}>
                            <BiMenuAltLeft />
                        </div>}
                    </button>
                </div>
                <div className="divider" />
                <div className="phone_body">
                    <Link to={`/chat/abulaxad`}>
                        <Contact
                            name={"Abul Axad"}
                            msg={"Are you planning to play anything tonight?"}
                            time={"18:21 PM"}
                            status={"new"}
                        />
                    </Link>
                    <Link to={`/chat/abulaxad`}>
                        <Contact
                            name={"Sadiye"}
                            msg={"Are you planning to play anything tonight?"}
                            time={"22:10 PM"}
                        />
                    </Link>
                </div>

                <div className={'phone_footer'}>
                    <button onClick={logout}>
                        <BiLogOutCircle />
                    </button>
                </div>
            </div>

            {navigate && <Navigate to={'/'} replace />}
        </div>
    );
};

export default ContactBox;