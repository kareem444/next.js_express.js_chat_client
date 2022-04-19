import List from "@material-ui/core/List";
import React from 'react';
import { useSelector } from 'react-redux';
import InvokeFriendListitem from './InvokeFriendListitem';
import NoFriendsToVoke from './NoFriendsToVoke';

function InvokeModalBody({styles}) {
    const friends = useSelector((state) => state.friends);
    return (
        <div className={styles.invoke_friend_modal}>
            <h6>
                Invoke friend
            </h6>
            <div>
                {friends.friends.length > 0 ? (
                    <div className={styles.Invoke_friend_modal_list_container}>
                        <List component="nav">
                            {friends.friends.map((friend) => (
                                <div key={friend.id}>
                                    <InvokeFriendListitem styles={styles} friend={friend} />
                                </div>
                            ))}
                        </List>
                    </div>
                ) : (
                    <div className={styles.Invoke_friend_modal_no_friends_container}>
                        <NoFriendsToVoke styles={styles} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default InvokeModalBody;