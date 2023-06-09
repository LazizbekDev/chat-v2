import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Message from "../../components/Message.jsx";
import ContactBox from "../contact/ContactBox.jsx";
import {getMessage, reset, sendMessage} from "../../redux/conversation/message.js";
import {useDispatch, useSelector} from "react-redux";
import "./Chat.css"
import Loader from "../../components/loader.jsx";


const Chat = ({single}) => {
    const [close, setClose] = useState(false);
    const [avatar, setAvatar] = useState('');
    const { user } = useSelector((state) => state.auth);
    const { messages, isLoading, isSuccess } = useSelector((state) => state.messages);
    const dispatch = useDispatch();

    const closeHandler = () => setClose((prevState) => !prevState)
    const { id } = useParams();
    const { users } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getMessage({
            from: user._id,
            to: id ? id : "643fbf3364c5ac8bfa388a2f",
        }));
        if (isSuccess) {
            dispatch(reset())
        }
        const selectedUser = users.find(i => i._id === id);
        setAvatar(selectedUser?.avatar);
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const message = formData.get("message")
        const data = {
            from: user._id,
            to: id ? id : "643fbf3364c5ac8bfa388a2f",
            message
        }
        dispatch(sendMessage(data))
    }

    return (
        <div className="--dark-theme" id="chat">
            {!single && (
                <ContactBox close={close} onClick={closeHandler} />
            )}

            <div className={`chat-container ${!close && "chat-container-closed"}`}>
                <div className="chat__conversation-board">
                    {isLoading ? <Loader /> : messages.map((msg, i) => (
                        <Message
                            name={"AbulAxad"}
                            msg={msg.message}
                            fromMe={msg.fromMe}
                            avatar={avatar}
                            key={i}
                        />
                    ))}
                </div>
                <div className="chat__conversation-panel">
                    <form
                        autoComplete={'off'}
                        className="chat__conversation-panel__container"
                        onSubmit={submitHandler}>
                        <button className="chat__conversation-panel__button panel-item btn-icon add-file-button">
                            <svg className="feather feather-plus sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                        <button className="chat__conversation-panel__button panel-item btn-icon emoji-button">
                            <svg className="feather feather-smile sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg"
                                 width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                <line x1="15" y1="9" x2="15.01" y2="9"></line>
                            </svg>
                        </button>
                        <input
                            className="chat__conversation-panel__input panel-item"
                            placeholder="Type a message..."
                            name={"message"}
                        />
                        <button type={"submit"} className="chat__conversation-panel__button panel-item btn-icon send-message-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 aria-hidden="true" data-reactid="1036">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Chat;