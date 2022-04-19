import {
    faSmileWink,
    faStar,
    faUserPlus,
    faUserSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MakeWink } from "../../redux/actions/MakeWink";
import { UnFriendUser } from "../../redux/actions/UnFriendUser";

function ProfileInfo({ styles, profile, showWinkButton }) {
    const friends = useSelector((state) => state.friends.friends);
    const dispatch = useDispatch();

    const [ToggleAddbutton, setToggleAddbutton] = useState();

    useEffect(() => {
        for (let i = 0; i < friends.length; i++) {
            if (friends[i].id === profile.id) {
                setToggleAddbutton(false);
            } else {
                setToggleAddbutton(true);
            }
        }
    }, [friends, profile.id]);

    const [ShowTheWinkButton, setShowTheWinkButton] = useState(true);
    useEffect(() => {
        if (showWinkButton) {
            setShowTheWinkButton(true);
        } else {
            setShowTheWinkButton(false);
        }
    }, [showWinkButton]);

    return (
        <div className={styles.profile_info_container}>
            <div>
                <div>
                    <span>
                        <FontAwesomeIcon icon={faStar} size="sm" />
                    </span>
                    <h5>{profile.name}</h5>
                </div>
                <p>{profile.email}</p>
                <p className="text-center">{profile.description} </p>
            </div>
            <div className="w-100">
                <button
                    disabled={ShowTheWinkButton ? false : true}
                    onClick={() => {
                        dispatch(MakeWink(profile.id));
                        setShowTheWinkButton(false);
                    }}
                    className={
                        ShowTheWinkButton
                            ? styles.showWinkButton
                            : styles.disabledWinkButton
                    }
                >
                    <FontAwesomeIcon icon={faSmileWink} size="lg" />
                </button>
                {ToggleAddbutton ? (
                    <button
                        className={styles.add_friend_button}
                        onClick={() => {
                            setToggleAddbutton(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faUserPlus} size="lg" />
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            dispatch(UnFriendUser(profile.id));
                            setToggleAddbutton(true);
                        }}
                        className={styles.un_friend_button}
                    >
                        <FontAwesomeIcon icon={faUserSlash} size="lg" />
                    </button>
                )}
            </div>
        </div>
    );
}

export default ProfileInfo;
