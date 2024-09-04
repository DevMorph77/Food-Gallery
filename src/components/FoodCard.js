import React from 'react';
import { useNavigate } from 'react-router-dom';

function FoodCard({ data = [] }) {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/food/${id}`);
  };

  if (!Array.isArray(data) || data.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {data.map((item) => (
        <div key={item.id} className='bg-white shadow-lg rounded-lg overflow-hidden'>
          <img src={item.image_url || 'default-image-url.jpg'} alt={item.title} className='w-full h-48 object-cover' />
          <div className='p-4'>
            <h2 className='text-xl font-semibold mb-2'>{item.title || 'No title'}</h2>
            <p className='text-gray-600'>{item.description || 'No description'}</p>
            <div className='flex justify-center bg-blue-600 rounded-[5px] mt-5'>
              <button onClick={() => handleReadMore(item.id)} className='text-white'>READ MORE</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodCard;
