import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import SearhListItem from "./SearhListItem";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { SearchFriends } from "../../redux/actions/SearchFriends";
import { REMOVE_SEARCH_FRIEND } from "../../redux/actions/type";

function SearhList({ styles }) {
  const searchFriend = useSelector(
    (state) => state.SearchFielduser
  );
  const dispatch = useDispatch();
  const [HidePlaceHolder, setHidePlaceHolder] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (searchFriend.searchFriend !== null) {
      setHidePlaceHolder(true);
    } else {
      setHidePlaceHolder(false);
    }
  }, [searchFriend.searchFriend]);

  const searchVal = watch("search");

  useEffect(() => {
    if (!searchVal) {
      dispatch({ type: REMOVE_SEARCH_FRIEND });
      setHidePlaceHolder(false);
    }
  }, [searchVal]);

  const onSubmit = (data) => {
    dispatch(SearchFriends(data));
  };

  return (
    <div className={styles.search_list_container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className={styles.search_input}
          placeholder="Email / mobile"
          {...register("search")}
        />
        <button type="submit" className={styles.search_input_button}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      {HidePlaceHolder ? (
        <div className={styles.List_search_container}>
          {searchFriend.searchFriend !== null && (
            <SearhListItem
              searchFriend={searchFriend.searchFriend}
              winksCount={searchFriend.winksCount}
              showWinkButton={searchFriend.showWinkButton}
              styles={styles}
            />
          )}
        </div>
      ) : (
        <div className={styles.search_list_Placeholder}>
          <FontAwesomeIcon
            icon={faSearch}
            className={styles.search_list_Placeholder_icon}
          />
          <p className="mb-0">search for new</p>
          <p className="mb-0">friends</p>
        </div>
      )}
    </div>
  );
}

export default SearhList;
