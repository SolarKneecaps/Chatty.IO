import React from 'react';
import Chat from './Chat';
import Users from './Users';


const ChatRoomContent = ({message, messages, setMessage, sendMessage, user, users}) =>{
    return(
        <div className = 'chatRoomContent--container'>
            <Chat
                message = {message}
                messages = {messages}
                setMessage = {setMessage}
                sendMessage = {sendMessage}
                user = {user}
            />
            <Users
                user = {user}
                users = {users}
            />
        </div>
    )
}

export default ChatRoomContent;