import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "@material-ui/core/List";
import RoomListitem from "./RoomListitem";

function RoomList({ styles }) {
    const rooms = useSelector((state) => state.room.rooms);
    const [RoomIdToLeave, setRoomIdToLeave] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].id === RoomIdToLeave) {
                rooms.splice(i, 1);
                dispatch({ type: "kareem", rooms });
            }
        }
    }, [RoomIdToLeave]);
    return (
        <List
            component="nav"
            className={styles.list_room_container}
            aria-label="mailbox folders"
            style={{ padding:0 }}
        >
            {rooms.length > 0 ? (
                rooms.map((room) => (
                    <div key={room.id}>
                        <RoomListitem
                            styles={styles}
                            room={room}
                            setRoomIdToLeave={setRoomIdToLeave}
                        />
                    </div>
                ))
            ) : (
                <div className="d-flex align-items-center justify-content-center bg-secondary h-100">
                    <h4 className="text-white-50 fs-4 ">No rooms</h4>
                </div>
            )}
        </List>
    );
}

export default RoomList;
