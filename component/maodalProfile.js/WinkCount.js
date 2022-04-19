import { faSmileWink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function WinkCount({ styles, winksCount }) {
    return (
        <div className={styles.wink_count_container}>
            <FontAwesomeIcon icon={faSmileWink} size="lg" />
            <p>{winksCount}</p>
        </div>
    );
}

export default WinkCount;