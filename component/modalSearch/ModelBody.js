import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import SearchResult from "./SearchResult";
import ModelPlaceHolder from "./ModelPlaceHolder";
import { SearchFriends } from "../../redux/actions/SearchFriends";
import { REMOVE_SEARCH_FRIEND } from "../../redux/actions/type";

function ModelBody({ styles }) {
    const searchFriend = useSelector((state) => state.SearchFielduser); 
    const [ShowplaceHolder, setShowplaceHolder] = useState(true);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        dispatch(SearchFriends(data));
    };

    useEffect(() => {
        if (searchFriend.searchFriend !== null) {
            setShowplaceHolder(false);
        } else {
            setShowplaceHolder(true);
        }
    }, [searchFriend.searchFriend]);

    const searchVal = watch("search");

    useEffect(() => {
        if (!searchVal) {
            dispatch({ type: REMOVE_SEARCH_FRIEND });
            setShowplaceHolder(true);
        }
    }, [searchVal]);
    return (
        <div className="h-100">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.search_model_form}
            >
                <input
                    type="text"
                    className=""
                    placeholder="Email / mobile"
                    {...register("search")}
                />
                <button type="submit" className="">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            <div className={styles.search_body_content}>
                {ShowplaceHolder ? (
                    <ModelPlaceHolder styles={styles} />
                ) : (
                    <SearchResult
                        styles={styles}
                        searchFriend={searchFriend.searchFriend}
                        winksCount={searchFriend.winksCount}
                        showWinkButton={searchFriend.showWinkButton}
                    />
                )}
            </div>
        </div>
    );
}

export default ModelBody;
