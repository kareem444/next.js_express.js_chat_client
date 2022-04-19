import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/dist/client/router';
import { useDispatch } from 'react-redux';
import { InvokeFriendToRoom } from '../../redux/actions/InvokeFriendToRoom';
import { HIDE_INVOKE_FRIEND_MODAL } from '../../redux/actions/type';

function InvokeFriendListitem({ styles, friend }) {
    const router = useRouter();
    const roomId = router.query.room;
    const dispatch = useDispatch()
    return (
        <div className={styles.Invoke_friend_modal_list}>
            <div>
                <Avatar alt={friend.name} src="/static/images/avatar/1.jpg" />
                <p>{friend.name}</p>
            </div>
            <FontAwesomeIcon icon={faBullhorn} onClick={() => {
                dispatch(InvokeFriendToRoom(roomId, friend.id))
                dispatch({type:HIDE_INVOKE_FRIEND_MODAL})
            }} />
        </div>
    );
}

export default InvokeFriendListitem;