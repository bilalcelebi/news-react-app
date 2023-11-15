import NewsList from './components/NewsList'
import StylishHeader from './components/StylishHeader';

import React, { useState, useEffect } from 'react';


function App() {

  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=08aa970f64e049478b09d990b540d30d');
        const data = await response.json();
        setNewsList(data['articles']);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <StylishHeader>Latest News</StylishHeader>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <NewsList newsData={newsList} />
      )}
    </div>
  );

}

export default App;