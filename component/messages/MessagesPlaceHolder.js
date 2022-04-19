import React from 'react';

function MessagesPlaceHolder({styles}) {
    return (
        <div className={styles.show_messages_place_holder}>
            <h5>No messages yet</h5>
        </div>
    );
}

export default MessagesPlaceHolder;