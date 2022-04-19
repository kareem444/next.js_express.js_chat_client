import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmileWink } from "@fortawesome/free-solid-svg-icons";
import UnfriendButton from "./UnfriendButton";
import { useDispatch } from "react-redux";
import { MakeWink } from "../../redux/actions/MakeWink";

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(16),
        height: theme.spacing(16),
    },
}));

function SearchResult({ styles, searchFriend, winksCount, showWinkButton }) {
    const [ShowTHeWinkButton, setShowTHeWinkButton] = useState(false);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (showWinkButton) {
            setShowTHeWinkButton(true);
        } else {
            setShowTHeWinkButton(false);
        }
    }, [showWinkButton]);
    return (
        <div className={styles.model_search_result}>
            <div className="h-100 d-flex flex-column align-items-center p-3">
                <Avatar
                    alt={searchFriend.name}
                    src="/static/images/avatar/2.jpg"
                    className={classes.large}
                />
                <h6 className="mt-2">{searchFriend.name}</h6>
                <p className="mb-2">{searchFriend.email}</p>
                {searchFriend.description && (
                    <p className=" fst-italic">{searchFriend.description}</p>
                )}
                <div className="w-100  align-items-center d-flex flex-column mt-3">
                    <UnfriendButton searchFriend={searchFriend} />
                    <button
                        className={
                            ShowTHeWinkButton
                                ? styles.show_wink_button
                                : styles.disabled_wink_button
                        }
                        onClick={() => {
                            dispatch(MakeWink(searchFriend.id));
                            setShowTHeWinkButton(false)
                        }}
                        disabled={ShowTHeWinkButton ? false : true}
                    >
                        <FontAwesomeIcon icon={faSmileWink} size="lg" />
                        <span className="ms-1">Wink</span>
                    </button>
                </div>
            </div>
            <p>
                <FontAwesomeIcon icon={faSmileWink} size="lg" />
                <span className="ms-1">{winksCount}</span>
            </p>
        </div>
    );
}

export default SearchResult;
