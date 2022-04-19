import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { ShowModalAction } from "../../redux/actions/SearchModalAction";
import ModelBody from "./ModelBody";

function SerchModal({ styles }) {
    const { ShowSearchModal} = useSelector((state) => state.showModal);
    const dispatch = useDispatch();
    return (
        <div>
            <Modal
                centered
                backdropClassName="d-md-none"
                dialogClassName="d-md-none"
                aria-labelledby="d-none bg-danger"
                show={ShowSearchModal}
                onHide={() => {
                    dispatch(ShowModalAction(false, false));
                }}
                animation={false}
            >
                <Modal.Body className="p-0">
                    <ModelBody styles={styles} />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default SerchModal;
