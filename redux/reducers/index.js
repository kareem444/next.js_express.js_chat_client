import { combineReducers } from 'redux';
import Auth from './Auth'
import ShowModal from './ShowModal'
import Room from './Room'
import Friends from './Friends'
import FriendsRequests from './FrirendsRequests'
import SearchFielduser from './SearchFielduser';
import Profile from './Profile';
import Winks from './Winks';

const reducers = combineReducers({
    auth:Auth,
    showModal:ShowModal,
    room:Room,
    friends:Friends,
    friendsRequests:FriendsRequests,
    SearchFielduser:SearchFielduser,
    profile:Profile,
    winks:Winks
});

export default reducers;
