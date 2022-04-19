import React from "react";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmileWink } from "@fortawesome/free-solid-svg-icons";

function NavbarRoomName(props) {
    const room = useSelector((state) => state.room.roomInformation);
    const router = useRouter();
    return (
        <div>
            {router.pathname !== "/room/[room]" ? (
                <div className=" text-white">
                    <FontAwesomeIcon icon={faSmileWink} size="lg"/>
                    <span className="ms-1">Wink</span>
                </div>
            ) : room.name ? (
                room.name
            ) : (
                <div>
                    <FontAwesomeIcon icon={faSmileWink} />
                    <span>Wink</span>
                </div>
            )}
        </div>
    );
}

export default NavbarRoomName;
