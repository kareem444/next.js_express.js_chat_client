import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { ShowModalAction } from "../../redux/actions/SearchModalAction";
import { GetProfile } from "../../redux/actions/GetProfile";

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
}));

function NavBarAuthInfo({ }) {
    const user = useSelector((state) => state.auth.user);
    const [UserName, setUserName] = useState("");
    useEffect(() => {
        if (user) {
            if (user.name !== null) {
                setUserName(user.name);
            }
        }
    }, [user]);
    const classes = useStyles();
    const dispatch = useDispatch()
    return (
        <div className="d-flex" onClick={() => {
            dispatch(ShowModalAction(false, true))
            dispatch(GetProfile(user.id))
        }}>
            <div className="me-1">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small} />
            </div>
            <div>{UserName}</div>
        </div>
    );
}

export default NavBarAuthInfo;
