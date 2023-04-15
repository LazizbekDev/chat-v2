import "./contacts.css"
import ContactItem from "./contactItem";
import {Link} from "react-router-dom";
import {useState} from "react";
import { SlClose } from "react-icons/sl";
import { BiMenuAltLeft } from "react-icons/bi";

const Contacts = () => {
    const [close, setClose] = useState(false)
    const closeHandler = () => {
        setClose((prevState) => !prevState)
    }

    return (
        <div className={`phoneWrapper ${close && "phoneWrapperMenu"}`}>

            <div className={`${!close ? "phone" : "phone-closed"}`}>
                <div className="phone_head">
                    {!close && (
                        <div className="title">My Chats</div>
                    )}
                    <button
                        onClick={closeHandler}
                        className={`${close && "open-btn"}`}>
                        {!close ? <SlClose /> : <BiMenuAltLeft />}
                    </button>
                </div>
                <div className="divider" />
                <div className="phone_body">
                    <Link to={`/chat/abulaxad`}>
                        <ContactItem
                            name={"Abul Axad"}
                            msg={"Are you planning to play anything tonight?"}
                            time={"18:21 PM"}
                            status={"new"}
                        />
                    </Link>
                    <Link to={`/chat/abulaxad`}>
                        <ContactItem
                            name={"Sadiye"}
                            msg={"Are you planning to play anything tonight?"}
                            time={"22:10 PM"}
                        />
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Contacts;