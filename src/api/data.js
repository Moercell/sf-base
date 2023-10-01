// pages/api/gameData.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { itemData } = req.body;
  
      // You can process the itemData here as needed
  
      res.status(200).json({ receivedData: 'all good' });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  