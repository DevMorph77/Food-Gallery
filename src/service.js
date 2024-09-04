// src/service.js
const API_URL = 'http://localhost:8000/api/foods';

// Fetch all foods
export async function fetchFoods() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch foods: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching foods:', error);
    throw error;
  }
}

// Fetch a single food item by ID
export async function fetchFoodById(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch food details: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching food by ID:', error);
    throw error;
  }
}
