// pages/api/gameData.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      // Retrieve the data from the request body
      const { itemData } = req.body;
  
      // You can process the itemData here as needed
  
      // Send a response (for example, echoing the data)
      res.status(200).json({ receivedData: 'all good' });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  