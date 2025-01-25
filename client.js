const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messagecontainer = document.querySelector(".container")
var audio = new Audio('ting.mp3');
const append =(message, position)=>{
    const messageElement = document.createElement('div')
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messagecontainer.append(messageElement);
    if(position=='left'){
        
    }
    audio.play();

}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message = messageInput.nodeValue;
    append(`you: ${message}`, 'right');
    socket.emit('send', message);
})
const name = prompt("Enter your name to join");
socket.emit('new-user-joined', name);

socket.on('user-joined', data=>{
    append(`${data.name} joined the chat`, 'right')
})
    socket.on('recive', data=>{
        append(`${data.name} :$ {data.message}`, 'left')
})
socket.on('leave', name=>{
    append(`${name}: left the chat`, 'left')

})

