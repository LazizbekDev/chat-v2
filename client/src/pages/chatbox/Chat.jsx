import {useState} from "react";
import { useParams } from "react-router-dom";
import Message from "../../components/Message.jsx";
import ContactBox from "../contact/ContactBox.jsx";
import "./Chat.css"


const Chat = ({single}) => {
    const [close, setClose] = useState(false);

    const closeHandler = () => {
        setClose((prevState) => !prevState)
    }

    const { id } = useParams();

    console.log(id)

    return (
        <div className="--dark-theme" id="chat">
            {!single && (
                <ContactBox close={close} onClick={closeHandler} />
            )}

            <div className={`chat-container ${!close && "chat-container-closed"}`}>
                <div className="chat__conversation-board">
                    <Message
                        name={"AbulAxad"}
                        msg={"Somewhere stored deep, deep in my memory banks is the phrase &quot;It really whips the llama's ass&quot;."}
                    />
                    <Message
                        name={"Lazizbek"}
                        msg={"Yeah"}
                        owner={true}
                    />
                </div>
                <div className="chat__conversation-panel">
                    <div className="chat__conversation-panel__container">
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
                        />
                        <button className="chat__conversation-panel__button panel-item btn-icon send-message-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 aria-hidden="true" data-reactid="1036">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;