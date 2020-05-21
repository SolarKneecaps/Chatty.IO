import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import ChatRoom from './components/ChatRoom';
import JoinPage from './components/JoinPage';


const App = () =>{
    return(
        <Router>
            <Route path = "/" exact component = {JoinPage}/>
            <Route path = "/chatroom" component = {ChatRoom}/>
        </Router>
    )
}

export default App;