// pages/api/gameData.js
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
    const { itemData } = req.body;

    // You can process the itemData here as needed

    // Send a response (for example, echoing the data)
    res.status(200).json({ receivedData: itemData });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
