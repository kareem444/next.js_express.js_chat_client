import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

function MessageItem({ styles , message }) {
    const userId = useSelector(state => state.auth.user.id)
    const messageUserId = message.user.id

    const classes = useStyles();
    return (
        <div className={messageUserId === userId ?styles.message_item_auth : styles.message_item}>
            <div>
                <div>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                </div>
            </div>
            <p>
                {message.content}
            </p>
        </div>
    );
}

export default MessageItem;