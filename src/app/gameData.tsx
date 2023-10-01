'use client'

import { useState, useEffect } from 'react';

interface GameDataResponse {
  receivedData: any;
}

function GameData() {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    // Fetch data from the API route you created
    fetch('/api/data', {
      method: 'POST',
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json() as Promise<GameDataResponse>)
      .then((result) => {
        setData(result.receivedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Game Data</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default GameData;
