import { faUserSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function ModalPlaceholder({styles}) {
    return (
        <div className={styles.modal_PlceHolder}>
            <FontAwesomeIcon icon={faUserSlash} />
            <p>No friends requests</p>
        </div>
    );
}

export default ModalPlaceholder;