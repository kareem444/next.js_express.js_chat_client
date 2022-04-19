import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import TheRoomMenu from "./TheRoomMenu";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

function RoomListitem({ styles, room , setRoomIdToLeave }) {
    const classes = useStyles();
    return (
        <div className="">
            <ListItem button divider>
                <Link href={`/room/${room.id}`}>
                    <div className="d-flex align-items-center justify-content-between w-100">
                        <div className="d-flex align-items-center py-1">
                            <Avatar alt={room.name} src="" className={classes.large} />
                            <div className={styles.list_information}>
                                <h6 className="ms-3 mb-0">{room.name}</h6>
                                <p className="mb-0 ms-3">{room.description}</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <TheRoomMenu styles={styles} roomId={room.id} setRoomIdToLeave={setRoomIdToLeave}/>
            </ListItem>
        </div>
    );
}

export default RoomListitem;
