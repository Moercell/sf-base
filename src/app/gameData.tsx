'use client'

// pages/gameData.tsx
import { useState, useEffect } from 'react';

function GameData() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from the API route you created
    fetch('/api/data', {
      method: 'POST',
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.text())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Game Data</h1>
      {data ? (
        <p>{data}</p>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default GameData;
