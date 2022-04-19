import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MakeFriendRequest } from "../../redux/actions/MakeFriendRequest";
import { faUserPlus, faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UnFriendUser } from "../../redux/actions/UnFriendUser";
import { DeleteFreindRequest } from "../../redux/actions/DeleteFreindRequest";


function ModalResultesButton({ searchFriend }) {
    const dispatch = useDispatch();
    const [RemoveSentFriendRequest, setRemoveSentFriendRequest] = useState(false);
    const mySentFriendRequests = useSelector((state) => state.friendsRequests);
    useEffect(() => {
        for (let i = 0; i < mySentFriendRequests.mySentFriendRequests.length; i++) {
            if (mySentFriendRequests.mySentFriendRequests[i].id === searchFriend.id) {
                setRemoveSentFriendRequest(true);
            } else {
                setRemoveSentFriendRequest(false);
            }
        }
    }, [searchFriend]);
    return (
        <div className="w-100">
            {RemoveSentFriendRequest ? (
                <button
                    className="btn btn-secondary w-100"
                    onClick={() => {
                        setRemoveSentFriendRequest(false);
                        dispatch(DeleteFreindRequest(searchFriend.id));
                    }}
                >
                    <FontAwesomeIcon icon={faUserSlash} size="lg" />
                    <span>UnSend</span>
                </button>
            ) : (
                <button
                    className="btn btn-primary w-100"
                    onClick={() => {
                        dispatch(MakeFriendRequest(searchFriend.id));
                        setRemoveSentFriendRequest(true);
                    }}
                >
                    <FontAwesomeIcon icon={faUserPlus} size="lg" />
                    <span className="ms-2">Add</span>
                </button>
            )}
        </div>
    );
}

export default ModalResultesButton;
