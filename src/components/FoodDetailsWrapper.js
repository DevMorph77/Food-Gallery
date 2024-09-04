// src/components/FoodDetailsWrapper.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FoodDetails from './FoodDetails';
import { fetchFoodById } from '../service'; // Make sure this is correctly implemented

function FoodDetailsWrapper() {
  const { id } = useParams(); // Extract ID from the URL
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFood = async () => {
      if (!id) {
        setError('Invalid food ID');
        setLoading(false);
        return;
      }

      try {
        const data = await fetchFoodById(id);
        setFood(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadFood();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!food) return <div>No food found</div>;

  return <FoodDetails data={food} />;
}

export default FoodDetailsWrapper;
