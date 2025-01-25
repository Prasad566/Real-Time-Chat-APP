 const io=require('socket.io')(8000.);
 const users={};
 io.on('connection',socket =>{
    socket.on('new-user-joind',name =>{
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name);
    });
    socket.on('send',Message =>{
        socket.broadcast.emit('receive',{message:{message,name:users[socket.id]}
    });
 })

 socket.on('discoonect',message =>{
    socket.broadcast.emit('left', users[socket.id])
    delete users[socket.id];
 });
})