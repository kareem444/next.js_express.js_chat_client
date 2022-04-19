import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmileWink } from "@fortawesome/free-solid-svg-icons";
import ResultsButtons from "./ResultsButtons";
import { MakeWink } from "../../redux/actions/MakeWink";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
}));

function SearhListItem({ searchFriend, winksCount, showWinkButton, styles }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [ShowTHeWinkButton, setShowTHeWinkButton] = useState(false);
    useEffect(() => {
        if (showWinkButton) {
            setShowTHeWinkButton(true);
        } else {
            setShowTHeWinkButton(false);
        }
    }, [showWinkButton]);
    return (
        <div className="h-100 d-flex flex-column align-items-center p-3 position-relative">
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
                <ResultsButtons searchFriend={searchFriend} />
                <button
                    className={
                        ShowTHeWinkButton
                            ? styles.show_wink_button
                            : styles.disabled_wink_button
                    }
                    disabled={ShowTHeWinkButton ? false : true}
                    onClick={() => {
                        dispatch(MakeWink(searchFriend.id));
                        setShowTHeWinkButton(false);
                    }}
                >
                    <FontAwesomeIcon icon={faSmileWink} size="lg" />
                </button>
            </div>
            <p className={styles.winks_count_friend_search}>
                <FontAwesomeIcon icon={faSmileWink} />
                <span>{winksCount}</span>
            </p>
        </div>
    );
}

export default SearhListItem;
