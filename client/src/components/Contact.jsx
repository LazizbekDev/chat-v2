const Contact = ({src, name, msg, time, status}) => {
    return (
        <div className="chat">
            <img className="chat_avatar" src={src}  alt={"alt"}/>
            <div className="chat_info">
                <div className="contact_name">{name}</div>
                <div className="contact_msg">{msg}</div>
            </div>
            <div className="chat_status">
                <div className="chat_date">{time}</div>
                {status && (
                    <div className="chat_new grad_pb">{status}</div>
                )}
            </div>
        </div>
    );
};

export default Contact;