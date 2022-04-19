import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { HIDE_FRIENDS_REQUESTS_MODAL } from "../../redux/actions/type";
import ModalPlaceholder from "./ModalPlaceholder";
import ModalResults from "./ModalResults";

function ModalFriendRequests({ styles }) {
    const FriendRequestsModal = useSelector((state) => state.friendsRequests);
    const dispatch = useDispatch();
    const [HandelFriendRequests, setHandelFriendRequests] = useState();
    useEffect(() => {
        for (let i = 0; i < FriendRequestsModal.friendRequests.length; i++) {
            if (FriendRequestsModal.friendRequests[i].id === HandelFriendRequests) {
                FriendRequestsModal.friendRequests.splice(i, 1);
            }
        }
    }, [HandelFriendRequests]);
    return (
        <div>
            <Modal
                show={FriendRequestsModal.showFriendRequestsModal}
                onHide={() => dispatch({ type: HIDE_FRIENDS_REQUESTS_MODAL })}
                centered
                dialogClassName="p-0"
            >
                <div className={styles.modal_friends_requests_container}>
                    <h5>Friend Requests</h5>
                    <div>
                        {FriendRequestsModal.friendRequestsCount > 0 ? (
                            FriendRequestsModal.friendRequests.map((request) => (
                                <div key={request.id}>
                                    <ModalResults
                                        styles={styles}
                                        request={request}
                                        setHandelFriendRequests={setHandelFriendRequests}
                                    />
                                </div>
                            ))
                        ) : (
                            <ModalPlaceholder styles={styles} />
                        )}
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ModalFriendRequests;
