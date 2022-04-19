import React, { useEffect } from "react";
import FriendListitem from "./FriendListitem";
import List from "@material-ui/core/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import NoFriends from "./NoFriends";

function FriendsList({ styles }) {
    const friends = useSelector((state) => state.friends);
    return (
        <div className={styles.friends_list_container}>
            <h5 className="text-center my-3">
                <FontAwesomeIcon icon={faUsers} /> friends list
            </h5>
            <div className={styles.friends_list}>
                {friends.friends.length > 0 ? (
                    <div className={styles.friends_list_wraper}>
                        <List component="nav" className={styles.frind_list_item}>
                            {friends.friends.map((friend) => (
                                <div key={friend.id}>
                                    <FriendListitem styles={styles} friend={friend} />
                                </div>
                            ))}
                        </List>
                    </div>
                ) : (
                    <div className={styles.no_friends}>
                        <NoFriends styles={styles} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default FriendsList;
