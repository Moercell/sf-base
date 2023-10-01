const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON data from POST requests
app.use(bodyParser.json());

// Endpoint to handle POST requests and update the displayed string
app.post('/updateString', (req, res) => {
    const receivedString = req.body || 'No string received';
    res.send(receivedString);

    // Update the displayed string on the frontend
    io.emit('updateString', receivedString);
});

// Serve the static HTML file
app.use(express.static('public'));

// Start the server
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Set up socket.io for real-time updates
const io = require('socket.io')(server);

// Socket.io event for real-time updates
io.on('connection', (socket) => {
    console.log('A user connected');

    // You can use this section to send real-time updates to the frontend if needed
});
