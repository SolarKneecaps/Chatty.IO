import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const JoinPage = ()=>{
    const [userName, setUserName] = useState('');
    const [userRoom, setUserRoom] = useState('');
    const [userError, setUserError] = useState(false)
    
    return(
        <div className = 'joinPage'>
            <h1 className = 'joinPage__header'>CHATTY.IO</h1>
            <form className = 'joinPage__form'>
                <input 
                    className = {(!userError)?'joinPage__form__txtin':'joinPage__form__txtin user--error'}
                    type = "text"
                    value = {userName}
                    onChange = {(e)=>{setUserName(e.target.value)}}
                    placeholder = {(!userError)?"Enter Username":"Maxium of Ten Characters"}
                />
                <select className = 'joinPage__form__sltin' defaultValue = "" onChange = {(e)=>setUserRoom(e.target.value)}>
                    <option value = "" disabled = {true}>Select Room</option>
                    <option value = "Red">Red Room</option>
                    <option value = "LoL">LoL Room</option>
                    <option value = "Coding">Coding Room</option>
                    <option value = "Secret">Secret Room</option>
                </select>
                <Link 
                    className = 'joinPage__form__btn'
                    to={`/chatroom?user=${userName}&room=${userRoom}`} 
                    onClick = {(e)=>{
                        if(userName.length>10){
                            e.preventDefault();
                            setUserError(true);
                            setUserName('')
                        }
                        else if(!userRoom || !userName){
                            e.preventDefault()
                        }
                    }}
                 >
                    Log In
                </Link>
            </form>
                <div className = 'animation__list__items animation__list__items-1'></div>
                <div className = 'animation__list__items animation__list__items-2'></div>
                <div className = 'animation__list__items animation__list__items-3'></div>
                <div className = 'animation__list__items animation__list__items-4'></div>
                <div className = 'animation__list__items animation__list__items-5'></div>
                <div className = 'animation__list__items animation__list__items-6'></div>
        </div>
    )
}
export default JoinPage;