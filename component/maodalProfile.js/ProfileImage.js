import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(18),
        height: theme.spacing(18),
    },
}));
function ProfileImage({ styles, profile }) {
    const classes = useStyles();
    return (
        <div className={styles.profile_avatar_container}>
            <Avatar
                alt={profile.name}
                src={profile.avatar || "/logo.png"}
                className={classes.large}
            />
        </div>
    );
}

export default ProfileImage;
