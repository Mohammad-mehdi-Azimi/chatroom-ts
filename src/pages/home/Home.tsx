import Chat from '../../components/Chat/Chat';
import Sidebar from '../../components/Sidebar/Sidebar';
import UserList from '../../components/UserList/UserList'
import styles from './home.module.css'

function Home() {
  return (
    <div className={styles.header}>
      <Sidebar />
      <UserList />
      <Chat />
    </div>
  );
}

export default Home