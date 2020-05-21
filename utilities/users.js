let users = [];

const addUser = ({id, user, room})=>{
    let newUser = {id, user, room};
    users = [...users, newUser];
    return newUser;
}

const findUser = (id)=>{
    let user = users.find(user=>{
        return user.id === id
    })

    return user;
}

const removeUser = (id)=>{
    const idIndex = users.findIndex((user=>{
        return user.id === id;
     }))
 
     if(idIndex !==-1){
         return users.splice(idIndex, 1)[0];
     }
}

const findUsers = (room) =>{
    let roomUsers = users.filter(user=>{
        return user.room === room
    })

    return roomUsers.map(user=>{
        return user.user;
    })

    
}

module.exports = {
    addUser, findUser, removeUser, findUsers
}