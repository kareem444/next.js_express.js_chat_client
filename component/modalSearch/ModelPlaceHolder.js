import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function ModelPlaceHolder({ styles }) {
    return (
        <div className={styles.model_placeholder_container}>
            <FontAwesomeIcon
                icon={faSearch}
                className={styles.search_list_Placeholder_icon}
            />
            <p className="mb-0">search for new friends</p>
        </div>
    );
}

export default ModelPlaceHolder;