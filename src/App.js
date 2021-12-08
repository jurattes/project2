import './App.css';
import Header from './ForumComponents/Header';
import Main from './ForumComponents/Main';
import Footer from './ForumComponents/Footer';
import useFetchData from './useFetchdata';
import { useState } from "react";

function App() {

  const [forumData, setForumData] = useFetchData('forum.json')
  const [usersData] = useFetchData('users.json')
  const [keyWord, setKeyWord] = useState('')

  return (
    <div className="App">
      <Header search={(e)=>setKeyWord(e.target.value)} keyWord={keyWord} />
      <Main
        keyWord={keyWord}
        data={forumData}
        users={usersData}
        setForumData={setForumData} />
      <Footer />
    </div>
  );
}

export default App;
