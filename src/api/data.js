// pages/api/data.js
import Cors from 'cors';

// Initialize the CORS middleware
const cors = Cors({
  methods: ['POST'], // Allow only POST requests
});

// Add the CORS middleware to your route
export default async function handler(req, res) {
  // Use the `cors` middleware
  await cors(req, res);

  if (req.method === 'POST') {
    // Retrieve the data from the request body
    const receivedString = req.body;

    // You can process the receivedString here as needed

    // Send the received string back in the response
    res.status(200).send(receivedString);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
