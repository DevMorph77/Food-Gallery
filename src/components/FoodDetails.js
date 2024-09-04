import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFoodById } from '../service';

function FoodDetails({ foods }) {
  const { id } = useParams();  // You can still use `useParams` if you want to keep the URL structure
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFood = async () => {
      try {
        const foodData = foods.find(item => item.id === parseInt(id));
        if (foodData) {
          setFood(foodData);
        } else {
          const data = await fetchFoodById(id);
          setFood(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadFood();
  }, [id, foods]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!food) return <div>No food found</div>;

  return (
    <div className='mt-20'>
      <h1 className='text-3xl font-bold'>{food.title}</h1>
      <img src={food.image_url} alt={food.title} className='w-full h-64 object-cover mt-4' />
      <p className='mt-4'>{food.article}</p>
    </div>
  );
}

export default FoodDetails;
