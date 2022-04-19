import { faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UnFriendUser } from "../../redux/actions/UnFriendUser";
import AddUnAddButtons from "./AddUnAddButtons";

function ResultsButtons({ searchFriend }) {
    const dispatch = useDispatch()
    const [ShowUnFriendButton, setShowUnFriendButton] = useState(false);
    const friends = useSelector(state => state.friends.friends)
    useEffect(() => {
        for (let i = 0; i < friends.length; i++) {
            if (friends[i].id === searchFriend.id) {
                setShowUnFriendButton(true)
            }else{
                setShowUnFriendButton(false)
            }
        }
    }, [searchFriend])
    return (
        <div className="w-100">
            {ShowUnFriendButton ? (
                <button className="btn btn-danger w-100" onClick={()=>{
                    dispatch(UnFriendUser(searchFriend.id))
                    setShowUnFriendButton(false)
                }}>
                    <FontAwesomeIcon icon={faUserSlash} size="lg" />
                </button>
            ) : (
                <AddUnAddButtons searchFriend={searchFriend} />
            )}
        </div>
    );
}

export default ResultsButtons;
