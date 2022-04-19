import { GET_ROOMS, GET_ROOM_MESSAGES_AND_INFORMATION, REMOVE_ROOM_INFORMATION } from "../actions/type";

const INITIAL_STATE = {
    loading: false,
    rooms: [],
    roomInformation: []
};

const Room = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ROOMS:
            return { ...state, loading: false, rooms: action.rooms }
        case REMOVE_ROOM_INFORMATION:
            return { ...state, roomInformation: [] , rooms:[] }
        case GET_ROOM_MESSAGES_AND_INFORMATION:
            return { ...state, roomInformation: action.data }
        default:
            return state
    }
}

export default Room;