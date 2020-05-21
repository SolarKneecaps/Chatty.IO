import React from 'react';


const ChatRoomHeader = ({room}) =>{
    return(
        <div className = 'chatRoomHeader'>
            <h1 className = 'chatRoomHeader__title'>Chatty.IO</h1>
            <h4 className = 'chatRoomHeader__room'>{`${room} Room`}</h4>
            <a href = '/' className = 'chatRoomHeader__btn'>Log Out</a>
        </div>
    )
}

export default ChatRoomHeader