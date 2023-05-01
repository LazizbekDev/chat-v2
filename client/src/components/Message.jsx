import {useSelector} from "react-redux";

const Message = ({name, fromMe = false, msg, avatar}) => {
    const { user } = useSelector((state) => state.auth);

    return (
        <div className={`chat__conversation-board__message-container ${fromMe && "reversed"}`}>
            <div className="chat__conversation-board__message__person">
                <div className="chat__conversation-board__message__person__avatar">
                    <img
                        src={fromMe ? user.avatar : avatar}
                        alt="Monika Figi"
                    />
                </div>
                <span className="chat__conversation-board__message__person__nickname">
                    {name}
                </span>
            </div>
            <div className="chat__conversation-board__message__context">
                <div className="chat__conversation-board__message__bubble">
                    <span>
                        {msg}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Message;