import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CoinList.css'; // Import the CSS file
const CoinList = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coincap.io/v2/assets', {
          headers: { Authorization: 'Bearer YOUR_API_KEY' }, // Replace with your CoinCap API key
        });

        const coinsData = response.data.data;
        setCoins(coinsData);
      } catch (error) {
        console.error('Failed to fetch coins:', error);
      }
    };

    fetchData();
  }, []);

  const sortedCoins = coins.sort((a, b) => b.changePercent24Hr - a.changePercent24Hr);

  return (
    <div className="coin-container">
      {sortedCoins.map((coin) => (
        <div className="coin" key={coin.symbol}>
          <p>Symbol: {coin.symbol}</p>
          <p>Name: {coin.name}</p>
          <p>Market Cap: {coin.marketCapUsd}</p>
          <p>Price: {coin.priceUsd}</p>
        </div>
      ))}
    </div>
  );
};

export default CoinList;
