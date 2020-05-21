import React, { useState } from "react";


const Users = ({user, users}) =>{
    const [closed, setClosed] = useState(false);
    return(
            <div 
                className = {`users--container ${(closed)?'closed':null}`}
                onClick = {(e)=>{
                    setClosed(!closed)
                }}
            >
                <ul className = {`users--container__list ${(closed)?'closed':null}`}>
                <div className = 'users--container__X'><i class="far fa-lg fa-times-circle"></i></div>
                    {users.map((userlist, index)=>{
                        return(
                            (userlist === user)?
                            <li key = {index} className = {`users--container__list__item user`}><i class="fas fa-user"></i>{userlist}</li>: 
                            <li key = {index} className = {`users--container__list__item`}>{userlist}</li>  
                        )}
                    )}
                </ul>
            </div>
    )
}

export default Users;