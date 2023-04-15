import React from 'react';
/*import smile from "../assets/smile.svg";
import dot from "../assets/dot.svg";*/

const Message = ({name, owner = false, msg}) => {
    return (
        <div className={`chat__conversation-board__message-container ${owner && "reversed"}`}>
            <div className="chat__conversation-board__message__person">
                <div className="chat__conversation-board__message__person__avatar">
                    <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
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
           {/* <div className="chat__conversation-board__message__options">
                <button className="btn-icon chat__conversation-board__message__option-button option-item emoji-button">
                    <img
                        src={smile}
                        className="feather feather-smile sc-dnqmqq jxshSx"
                        alt={"smile icon"}
                    />
                </button>
                <button className="btn-icon chat__conversation-board__message__option-button option-item more-button">
                    <img
                        src={dot}
                        className="feather feather-more-horizontal sc-dnqmqq jxshSx"
                        alt={"dot icon"}
                    />
                </button>
            </div>*/}
        </div>
    );
};

export default Message;