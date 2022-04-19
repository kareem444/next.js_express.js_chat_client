import React from 'react';
import { useSelector } from 'react-redux';
import MessageItem from './MessageItem';

function TheMessage({ styles }) {
    const messages = useSelector(state => state.room.roomInformation.messages)
    return (
        <div className={styles.show_messages_container}>
            {messages && messages.map(el => (
                <div key={el.id}>
                    <MessageItem styles={styles} message={el}/>
                </div>
            ))}
        </div>
    );
}

export default TheMessage;