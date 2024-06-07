// src/api.js

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

// Example function to fetch data
export const fetchData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/your-endpoint`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Example function to post data
export const postData = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/your-endpoint`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};
