import { faUsersSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StylesProvider } from '@material-ui/core';
import React from 'react';

function NoFriends({styles}) {
    return (
        <div className={styles.no_friends_container}>
            <FontAwesomeIcon icon={faUsersSlash} />
            <p>No friends yet</p>
        </div>
    );
}

export default NoFriends;