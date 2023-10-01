const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON data from POST requests
app.use(bodyParser.json());

// Endpoint to handle POST requests
app.post('/', (req, res) => {
  const receivedString = req.body.string || 'No string received';
  res.send(`Received string: ${receivedString}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
