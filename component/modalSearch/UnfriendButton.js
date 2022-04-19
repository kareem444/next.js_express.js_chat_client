import { faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ModalResultesButton from "./ModalResultesButton";

function UnfriendButton({ searchFriend }) {
    const [ShowUnFriendButton, setShowUnFriendButton] = useState(false);
    const friends = useSelector(state => state.friends.friends);
    useEffect(() => {
        for (let i = 0; i < friends.length; i++) {
            if (friends[i].id === searchFriend.id) {
                setShowUnFriendButton(true)
            } else {
                setShowUnFriendButton(false)
            }
        }
    }, [searchFriend, friends])
    return (
        <div className="w-100">
            {ShowUnFriendButton ? (
                <button className="btn btn-danger w-100">
                    <FontAwesomeIcon icon={faUserSlash} size="lg" />
                    <span className="ms-1">UnFriend</span>
                </button>
            ) : (
                <ModalResultesButton searchFriend={searchFriend} />
            )}
        </div>
    );
}

export default UnfriendButton;
