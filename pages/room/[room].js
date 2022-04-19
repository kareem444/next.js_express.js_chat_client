import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { useSelector, useDispatch } from "react-redux";
import ModalFriendRequests from "../../component/modalFriendRequest/ModalFriendRequests";
import { getRoom } from "../../redux/actions/GetRoom";
import styles from "../../styles/Room.module.css";
import HomeStyles from "../../styles/Home.module.css";
import { UserInfo } from "../../redux/actions/UserInfo";
import MessageForm from "../../component/messages/MessageForm";
import ShowMessages from "../../component/messages/ShowMessages";
import InvokeFriendModal from "../../component/invokeFriendModal/InvokeFriendModal";

function Room({ }) {
    const user = useSelector((state) => state.auth);
    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
        if (!user.user) {
            dispatch(UserInfo());
        }
        if (router.query.room) {
            dispatch(getRoom(router.query.room));
        }
    }, [router.query.room]);
    useEffect(() => {
        if (!user.allowToGetTheRoom) {
            setTimeout(() => {
                router.push('/')
            }, 3000);
        }
    }, [user.allowToGetTheRoom]);

    return (
        <div className={styles.room_container}>
            {user.allowToGetTheRoom ? (
                <ShowMessages styles={styles} />
            ) : (
                <div className="h-100 d-flex  align-items-center justify-content-center text-black fs-1 fw-bold bg-white">
                    401 error
                </div>
            )}
            {user.allowToGetTheRoom && (
                <div>
                    <MessageForm styles={styles} />
                </div>
            )}
            <ModalFriendRequests styles={HomeStyles} />
            <InvokeFriendModal styles={styles}/>
        </div>
    );
}

export default Room;
