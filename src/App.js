import './App.css';
import {Routes, Route} from 'react-router-dom';

// components
import {Nabvar} from '../src/components/Nabvar';

// pages
import { MyFreeChat } from './pages/MyFreeChat'
import { Home } from '../src/pages/Home'

function App() {
  return (
    <>
    <Nabvar />

    <Routes>

        <Route path={"/"} exact element={<MyFreeChat />}/>
        <Route path={"/home"} exact element={<Home />}/>
        {/* <Route path={"/messenger"} exact element={<Messages/>}/> */}


      </Routes>
    </>
  );
}

export default App;
