import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBullhorn,
    faCommentAlt,
    faHome,
    faSearch,
    faSmileWink,
    faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import TheNavMenu from "./TheNavMenu";
import { useDispatch, useSelector } from "react-redux";
import { ShowModalAction } from "../../redux/actions/SearchModalAction";
import Badge from "@material-ui/core/Badge";
import {
    REMOVE_SEARCH_FRIEND,
    SHOW_FRIENDS_REQUESTS_MODAL,
    SHOW_INVOKE_FRIEND_MODAL,
} from "../../redux/actions/type";
import { useRouter } from "next/dist/client/router";
import NavbarRoomName from "./NavbarRoomName";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import NavBarAuthInfo from "./NavBarAuthInfo";

function Navbar({ setAuth }) {
    const friendsRequestsCount = useSelector((state) => state.friendsRequests);
    const { todayWinks } = useSelector((state) => state.winks);
    const dispatch = useDispatch();
    const router = useRouter();

    const Wink = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Winks
        </Tooltip>
    );
    const CreatRoomTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Create Room
        </Tooltip>
    );
    const FriendRequestTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Friend requests
        </Tooltip>
    );
    const HomeTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Home
        </Tooltip>
    );
    const Invoke = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            invoke
        </Tooltip>
    );
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <NavbarRoomName />
                </a>
                <ul className="navbar-nav ms-auto">
                    {router.pathname !== "/room/[room]" && (
                        <li className="nav-item me-3">
                            <a className="nav-link text-white" onClick={() => { }}>
                                <span>
                                    <NavBarAuthInfo />
                                </span>
                            </a>
                        </li>
                    )}
                    <li className="nav-item me-3">
                        <a
                            className="nav-link text-white"
                            onClick={() => {
                                router.push("/");
                            }}
                        >
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 250, hide: 400 }}
                                overlay={HomeTooltip}
                            >
                                <span>
                                    <FontAwesomeIcon icon={faHome} size="lg" />
                                </span>
                            </OverlayTrigger>
                        </a>
                    </li>
                    <li className="nav-item me-md-2 me-sm-0">
                        <a
                            className="nav-link  text-white d-flex align-items-center"
                            onClick={() => {
                                dispatch({ type: SHOW_FRIENDS_REQUESTS_MODAL });
                            }}
                        >
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 250, hide: 400 }}
                                overlay={FriendRequestTooltip}
                            >
                                <span>
                                    <Badge
                                        badgeContent={friendsRequestsCount.friendRequestsCount}
                                        color="secondary"
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "left",
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faUserPlus} />
                                    </Badge>
                                </span>
                            </OverlayTrigger>
                        </a>
                    </li>
                    {router.pathname !== "/room/[room]" && (
                        <li className="nav-item me-md-2 me-sm-0">
                            <a
                                className="nav-link  text-white d-flex align-items-center"
                                onClick={() => { }}
                            >
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={Wink}
                                >
                                    <span>
                                        <Badge
                                            badgeContent={todayWinks}
                                            color="secondary"
                                            anchorOrigin={{
                                                vertical: "top",
                                                horizontal: "left",
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faSmileWink} size="lg" />
                                        </Badge>
                                    </span>
                                </OverlayTrigger>
                            </a>
                        </li>
                    )}
                    {/* {router.pathname !== "/room/[room]" && (
                        <li className="nav-item me-md-2 me-sm-0">
                            <a
                                className="nav-link  text-white d-flex align-items-center"
                                onClick={() => { }}
                            >
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={CreatRoomTooltip}
                                >
                                    <span>
                                        <FontAwesomeIcon icon={faCommentAlt} size="lg" />
                                    </span>
                                </OverlayTrigger>
                            </a>
                        </li>
                    )} */}
                    {router.pathname !== "/room/[room]" ? (
                        <li className="nav-item px-2 d-md-none me-sm-0 me-md-3">
                            <div
                                className="nav-link text-white d-flex align-items-center"
                                onClick={() => {
                                    dispatch(ShowModalAction(true, false));
                                    dispatch({ type: REMOVE_SEARCH_FRIEND });
                                }}
                            >
                                <span>
                                    <FontAwesomeIcon icon={faSearch} size="lg" />
                                </span>
                            </div>
                        </li>
                    ) : (
                        <li className="nav-item px-2 me-sm-0 me-md-3">
                            <div
                                className="nav-link text-white d-flex align-items-center"
                                onClick={() => {
                                    dispatch({ type: SHOW_INVOKE_FRIEND_MODAL });
                                }}
                            >
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={Invoke}
                                >
                                    <span>
                                        <FontAwesomeIcon icon={faBullhorn} size="lg" />
                                    </span>
                                </OverlayTrigger>
                            </div>
                        </li>
                    )}
                    <li className="nav-item d-flex align-items-center">
                        <TheNavMenu setAuth={setAuth} />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
