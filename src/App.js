import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FoodCard from './components/FoodCard';
import FoodDetails from './components/FoodDetails';
import Nav from './components/Nav';
import { fetchFoods, fetchFoodById } from './service';

function App() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchFoods();
        setFoods(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Router>
      <div>
        <Nav />
        <div className='w-3/4 m-auto'>
          <Routes>
            <Route path="/" element={<FoodCard data={foods} />} />
            <Route path="/food/:id" element={<FoodDetails foods={foods} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
