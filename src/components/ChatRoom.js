import React, {useEffect, useState} from 'react';
//import {Link} from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';
import ChatRoomHeader from './ChatRoomHeader';
import ChatRoomContent from './ChatRoomContent';

let socket;

const ChatRoom = ({location})=>{

    const [room, setRoom] = useState('');
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const ENDPOINT = 'localhost:8080';

    useEffect(()=>{

        const {user, room} = queryString.parse(location.search);
        setUser(user);
        setRoom(room);

        socket = io(ENDPOINT);
        socket.emit('joinRoom', {user, room}, ()=>{})

        return ()=>{
            socket.emit('disconnect');
            socket.off();
        }

    }, [location, ENDPOINT])

    useEffect(()=>{
        socket.on('fromServerMsg', (newMessage)=>{
            setMessages([...messages, newMessage])
        })
    }, [messages])

    useEffect(()=>{
        socket.on('fromServerUsers', (users)=>{
            setUsers(users);
        })
    }, [users])

    const sendMessage = (e)=>{
        e.preventDefault()
        console.log(e.target.value)
        socket.emit('fromClientMsg', {message}, ()=>{
            setMessage('');
        })

    }
    return(
        <div className = 'chatRoom--container'>
            <ChatRoomHeader room = {room}/>
            <ChatRoomContent
                messages = {messages}
                setMessage = {setMessage}
                message = {message}
                sendMessage = {sendMessage}
                user = {user}
                users = {users}
            />
            <div className = 'animation__list__items animation__list__items-1'></div>
            <div className = 'animation__list__items animation__list__items-2'></div>
            <div className = 'animation__list__items animation__list__items-3'></div>
            <div className = 'animation__list__items animation__list__items-4'></div>
            <div className = 'animation__list__items animation__list__items-5'></div>
            <div className = 'animation__list__items animation__list__items-6'></div>
        </div>
    )
}

export default ChatRoom;