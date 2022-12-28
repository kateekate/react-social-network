import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogues from './Components/Dialogues/Dialogues';
import Header from "./Components/Header/Header";
import Music from './Components/Music/Music';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';
import state from './redux/state';

const App = (props) => {
  return (
    <BrowserRouter>
      <div id='page'>
        <Header />
        <Navbar state={props.state.navBlockFriends} />

        <div className='pageContent'>
          <Routes>
            <Route path='/profile' element={<Profile state={props.state.profilePage} />} />
            <Route path='/dialogues' element={<Dialogues state={props.state.dialoguesPage} />} />
            <Route path='/news' element={<News />} />
            <Route path='/Music' element={<Music />} />
            <Route path='/Settings' element={<Settings />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter >
  );
}

export default App;