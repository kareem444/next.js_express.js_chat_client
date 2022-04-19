import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { ShowModalAction } from "../../redux/actions/SearchModalAction";
import ProfileBody from "./ProfileBody";

function ModaLProfile({ styles }) {
    const { ShowFriendProfileModal } = useSelector((state) => state.showModal);
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    return (
        <div>
            <Modal
                centered
                backdropClassName=""
                dialogClassName=""
                aria-labelledby=""
                show={ShowFriendProfileModal}
                onHide={() => {
                    dispatch(ShowModalAction(false, false));
                }}
                animation={false}
            >
                <Modal.Body className="p-0">
                    {profile.user ? (
                        <ProfileBody
                            styles={styles}
                            profile={profile.user}
                            winksCount={profile.winksCount}
                            showWinkButton={profile.showWinkButton}
                        />
                    ) : (
                        <div>loading</div>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ModaLProfile;
