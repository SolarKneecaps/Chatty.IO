const express = require('express');
const http = require('http');
const socket = require('socket.io');
const cors = require('cors');

const {addUser, findUser, removeUser, findUsers} = require('./utilities/users');
const fortmatMsg = require('./utilities/formatMsg');
const router = require('./utilities/router');

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use(router);
app.use(cors());

io.on('connection', (socket)=>{

    //join
    socket.on('joinRoom', ({user, room}, callback)=>{
        socket.join(room);
        let newUser = addUser({id: socket.id, user, room});
        socket.emit('fromServerMsg', fortmatMsg({user: 'ADMIN', text: `${newUser.user}, welcome to the ${newUser.room} room!`}));
        socket.to(newUser.room).broadcast.emit('fromServerMsg', fortmatMsg({user: 'ADMIN', text: `${newUser.user} has joined!`}));
        io.emit('fromServerUsers', findUsers(newUser.room));
        callback();
    })

    socket.on('disconnect',()=>{
        console.log('disc')
        let disconnectedUser = removeUser(socket.id);
        socket.to(disconnectedUser.room).broadcast.emit('fromServerMsg', fortmatMsg({user: 'ADMIN', text: `${disconnectedUser.user} has left!`}))
        io.emit('fromServerUsers', findUsers(disconnectedUser.room));
    })

    //msg
     socket.on('fromClientMsg', ({message}, callback)=>{
        let fromUser = findUser(socket.id);
        io.to(fromUser.room).emit("fromServerMsg", fortmatMsg({user: fromUser.user, text: message}));

        callback();
    })

    


})

const PORT = process.env.PORT || 8080;
server.listen(PORT, ()=>{console.log(`port: ${PORT}`)})