import Contact from "../../components/Contact.jsx";
import {Link, Navigate} from "react-router-dom";
import {useEffect, useState} from "react";
import { SlClose } from "react-icons/sl";
import {BiLogOutCircle, BiMenuAltLeft} from "react-icons/bi";
import "./contact.css"
import {useDispatch, useSelector} from "react-redux";
import {logOut, reset} from "../../redux/auth/authSlice.js";
import {getAllUsers} from "../../redux/users/users.js";

const ContactBox = ({close, onClick}) => {
    const { user } = useSelector((state) => state.auth);
    const { users, isLoading } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const [navigate, setNavigate] = useState(false);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch])

    const logout = () => {
        dispatch(logOut());
        dispatch(reset());
        setNavigate(true)
    }

    return (
        <div className={`phoneWrapper ${close && "phoneWrapperMenu"}`}>

            <div className={`${!close ? "phone" : "phone-closed"}`}>
                <div className={!close ? 'contact_block' : "contact-closed"}>
                    <div className="phone_head">
                        {!close && (
                            <div className="title">{user?.name}</div>
                        )}
                        <button
                            onClick={onClick}
                            className={`${close && "open-btn"}`}>
                            {!close ? <SlClose /> : <div className={'open-handle'}>
                                <BiMenuAltLeft />
                            </div>}
                        </button>
                    </div>
                    <div className="divider" />
                    <div className="phone_body">
                        {isLoading ? "Loading..." : users.map((item) => (
                            <Link to={`/chat/${item._id}`} key={item._id}>
                                <Contact
                                    name={item.name}
                                    src={item.avatar}
                                    msg={"Are you planning to play anything tonight?"}
                                    time={"18:21 PM"}
                                    status={"new"}
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                {!close && (
                    <div className={'phone_footer'}>
                        <button onClick={logout}>
                            <BiLogOutCircle />
                        </button>
                    </div>
                )}
            </div>

            {navigate && <Navigate to={'/'} replace />}
        </div>
    );
};

export default ContactBox;