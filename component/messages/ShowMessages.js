import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MessagesPlaceHolder from "./MessagesPlaceHolder";
import TheMessage from "./TheMessage";

function ShowMessages({ styles }) {
    const [Showplaceholder, setShowplaceholder] = useState(true);
    const messages = useSelector((state) => state.room.roomInformation.messages);
    useEffect(() => {
        if (messages) {
            if (messages.length > 0) {
                setShowplaceholder(false)
            } else {
                setShowplaceholder(true)
            }
        }
    }, [messages]);
    return (
        <div className="h-100">
            {Showplaceholder ? (
                <MessagesPlaceHolder styles={styles} />
            ) : (
                <TheMessage styles={styles}/>
            )}
        </div>
    );
}

export default ShowMessages;
