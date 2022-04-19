import styles from '../styles/Home.module.css'
import SerchModal from '../component/modalSearch/SerchModal';
import RoomList from '../component/room/RoomList';
import FriendsList from '../component/friends/FriendsList';
import SearhList from '../component/search/SearhList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UserInfo } from '../redux/actions/UserInfo';
import ModalFriendRequests from '../component/modalFriendRequest/ModalFriendRequests';
import ModaLProfile from '../component/maodalProfile.js/ModaLProfile';

function Home({ Auth, setAuth }) {
  const dispatch = useDispatch()

  useEffect(() => {
    if (Auth) {
      dispatch(UserInfo())
    }
  }, [Auth])

  return (
    <div className={styles.container}>
      <div className="col-md-3 d-none d-md-block ">
        <div className="h-50">
          <SearhList styles={styles} />
        </div>
        <div className="h-50">
          <FriendsList styles={styles} />
        </div>
      </div>
      <div className="col-md-9 col-12">
        <RoomList styles={styles} />
      </div>
      <SerchModal styles={styles} />
      <ModalFriendRequests styles={styles}/>
      <ModaLProfile styles={styles} />
    </div>
  )
}

export default Home;