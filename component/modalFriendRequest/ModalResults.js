import React, { useState } from "react";
import { Avatar, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { FriendRequest } from "../../redux/actions/friendRequest";
import { MINUS_FRIEND_REQUEST_MARK } from "../../redux/actions/type";

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

function ModalResults({ styles, request , setHandelFriendRequests }) {
    const [Conformed, setConformed] = useState(false)
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <div>
            <ListItem button divider>
                <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="d-flex align-items-center py-1">
                        <Avatar alt={request.name} src="" className={classes.large} />
                        <h4 className="ms-3 mb-0">{request.name}</h4>
                    </div>
                    <button
                        className={Conformed ? "btn btn-secondary" : "btn btn-primary"}
                        onClick={() => {
                            dispatch(FriendRequest(request.id));
                            dispatch({ type: MINUS_FRIEND_REQUEST_MARK });
                            setConformed(true);
                            setHandelFriendRequests(request.id)
                        }}
                        disabled={Conformed ? true : false}
                    >
                        {Conformed ? "Confirmed" : "Confirm"}
                    </button>
                </div>
            </ListItem>
        </div>
    );
}

export default ModalResults;
