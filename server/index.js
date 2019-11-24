const express = require('express');
const WebSocket = require('ws');

const socket = new WebSocket.Server({ port: 32200 });
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = process.env.PORT || 22800;


app.listen(port, () => {
  socket.on('connection', (ws) => {
    setInterval(() => {
      ws.send(JSON.stringify({ type: 'ping', data: 'ping' }));
    }, 10000)
  });

  console.log(`Listening on port ${port}...`);
});