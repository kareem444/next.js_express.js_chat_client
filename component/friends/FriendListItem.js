import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { ShowModalAction } from "../../redux/actions/SearchModalAction";
import { GetProfile } from "../../redux/actions/GetProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { CreateRoom } from "../../redux/actions/CreateRoom";

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
}));

function FriendListitem({ friend, styles }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <div>
            <ListItem button divider>
                <div className="d-flex align-items-center justify-content-between w-100">
                    <div
                        className="d-flex align-items-center py-1 w-100"
                        onClick={() => {
                            dispatch(ShowModalAction(false, true));
                            dispatch(GetProfile(friend.id));
                        }}
                    >
                        <Avatar alt={friend.name} src="" className={classes.large} />
                        <h6 className="ms-2 mb-0 small">{friend.name}</h6>
                    </div>
                    <div className={styles.chat_with_friend_icon} onClick={()=>{
                        dispatch(CreateRoom(friend.id))
                    }}>
                        <FontAwesomeIcon icon={faCommentAlt} />
                    </div>
                </div>
            </ListItem>
        </div>
    );
}

export default FriendListitem;
