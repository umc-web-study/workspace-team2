import React from 'react';
import Back from './components/Back.js'
import ChatWrapper from './components/chat/ChatWrapper.jsx';
//import C from './components/C';

function App() {
  return (
    
    <ChatWrapper chatName="Test" userNum={1} userName="Test" roomNum={0}></ChatWrapper>
    //<Back></Back>
  );
}

export default App;
