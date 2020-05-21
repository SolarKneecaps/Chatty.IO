import React from 'react';

const Chat = ({message, messages, setMessage, sendMessage, user}) =>{
    return(
        <div className = 'chat--container'>
            <div className = 'chat--container__messages'>
            {messages.map((message, index)=>{
                return(
                    <div 
                        key = {index} 
                        className = {(message.user === user)?'chat--container__messages__self':'chat--container__messages__other'}
                    >
                       <div className = 'chat--container__messages__msg'> {message.text} </div> 
                       <div className = 'chat--container__messages__user'>{message.time} {message.user} </div>
                    </div>
                ) 
            })}
            </div>
            <input 
                className = 'chat--container__input'
                onKeyPress = {(e)=>(e.key === "Enter" && message) && sendMessage(e)}
                placeholder = "message here" 
                value = {message} 
                onChange = {(e)=>{setMessage(e.target.value)}}
            />
        </div>
    )
}

export default Chat;