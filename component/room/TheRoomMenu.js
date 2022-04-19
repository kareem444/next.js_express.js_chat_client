import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { faBug, faEllipsisV, faInfoCircle, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { LeaveRoom } from "../../redux/actions/LeaveRoom";

function TheRoomMenu({ styles, roomId , setRoomIdToLeave}) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const dispatch = useDispatch()
    const handleLeaveTheRoom = () => {
        dispatch(LeaveRoom(roomId))
        setAnchorEl(null);
        setRoomIdToLeave(roomId)
    };
    return (
        <div>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={styles.room_list}
            >
                <FontAwesomeIcon icon={faEllipsisV} />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className="menu_body"
            >
                <MenuItem onClick={handleLeaveTheRoom}>
                    {" "}
                    <FontAwesomeIcon icon={faSignOutAlt} color="gray" />{" "}
                    <span className="ms-1">Leave the room</span>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <FontAwesomeIcon icon={faInfoCircle} color="gray" />{" "}
                    <span className="ms-1">Room details</span>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <FontAwesomeIcon icon={faBug} color="gray" />
                    <span className="ms-1">Report the room</span>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default TheRoomMenu;
