const socket = io('http://localhost:3000');
    socket.on('messageFromServer', dataFromServer => {
        console.log(dataFromServer);
        socket.emit('dataToServer', {data: 'Data from the client'})
    })

    document.querySelector('#message-form').addEventListener('submit', event => {
        event.preventDefault();
        const newMessage = document.querySelector('#user-message').value;
        console.log(newMessage);
        socket.emit('newMessageToServer', {text: newMessage});
        document.querySelector('#message-form').reset();
    })
    socket.on('newMessageToClients', msg => {
        console.log(msg);
        document.querySelector('#messages').innerHTML += `<div class='single__message'>${msg.text}</div>`;
    })