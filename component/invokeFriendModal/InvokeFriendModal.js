import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { HIDE_INVOKE_FRIEND_MODAL } from "../../redux/actions/type";
import InvokeModalBody from "./InvokeModalBody";

function InvokeFriendModal({ styles }) {
    const { ShowInvokeFriendModal } = useSelector((state) => state.showModal);
    const dispatch = useDispatch();

    return (
        <Modal
            show={ShowInvokeFriendModal}
            onHide={() => {
                dispatch({ type: HIDE_INVOKE_FRIEND_MODAL });
            }}
            centered
            size="sm"
            dialogClassName="p-0"
        >
            <div>
                <InvokeModalBody styles={styles} />
            </div>
        </Modal>
    );
}

export default InvokeFriendModal;
