import { faUserAltSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function NoFriendsToVoke(props) {
    return (
        <div>
            <FontAwesomeIcon icon={faUserAltSlash} />
            <p>No freinds yet</p>
        </div>
    );
}

export default NoFriendsToVoke;