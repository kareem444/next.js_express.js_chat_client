import { GET_TODAY_WINKS_COUNT, GET_WINKS_COUNT } from "../actions/type";

const INITIAL_STATE = {
    winks: 0,
    todayWinks: 0
};

const Winks = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_WINKS_COUNT:
            return { ...state, winks: action.winks_count }
        case GET_TODAY_WINKS_COUNT:
            return { ...state, todayWinks: action.today_winks_count }
        default:
            return state
    }
}
export default Winks;