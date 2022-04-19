import React from 'react';
import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';
import WinkCount from './WinkCount';

function ProfileBody({ styles , profile , winksCount ,showWinkButton }) {
    return (
        <div className={styles.profile_modal_container}>
            <WinkCount styles={styles} winksCount={winksCount}/>
            <ProfileImage styles={styles} profile={profile}/>
            <ProfileInfo styles={styles} profile={profile} showWinkButton={showWinkButton}/>
        </div>
    );
}

export default ProfileBody;