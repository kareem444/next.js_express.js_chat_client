import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { faCog, faEllipsisV, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TheNavMenu({setAuth}) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logOut = () => {
        setAnchorEl(null);
        localStorage.removeItem("access_token");
        setAuth(false)
    };
    return (
        <div>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className=" text-white"
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
                <MenuItem onClick={handleClose}>
                    {" "}
                    <FontAwesomeIcon icon={faUser} color="gray" />{" "}
                    <span className="ms-1">My account</span>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <FontAwesomeIcon icon={faCog} color="gray" />{" "}
                    <span className="ms-1">Settings</span>
                </MenuItem>
                <MenuItem onClick={logOut}>
                    <FontAwesomeIcon icon={faSignOutAlt} color="gray" />
                    <span className="ms-1">Logout</span>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default TheNavMenu;
