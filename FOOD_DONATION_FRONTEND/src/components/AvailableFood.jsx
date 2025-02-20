import { useEffect, useState } from 'react';
import './AvailableFoodList.css'; // External CSS
import NavBar from './nabar';
const AvailableFoodList = ({ User, handleLogout }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchAvailableFood();
  }, []);

  // Fetch available food from backend
  const fetchAvailableFood = async () => {
    try {
      const response = await fetch('http://localhost:5000/available');
      const data = await response.json();
      setFoodItems(data);
    } catch (error) {
      console.error('Error fetching food:', error);
    }
  };

  // Handle "Receive" button click
  const handleReceive = async (foodId) => {
    try {
      const response = await fetch(`http://localhost:5000/request/${foodId}`, {
        method: 'PUT',
        credentials: 'include', // Ensures auth cookies are sent
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'Requested' }), // Send only the necessary field
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        fetchAvailableFood(); // Refresh list after requesting food
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('Error requesting food.');
    }
  };

  return (
    <>
      <NavBar User={User} handleLogout={handleLogout} />
      <div className="food-container">
        <h2>Available Food</h2>
        {message && <p className="message">{message}</p>}

        {foodItems.length === 0 ? (
          <p>No food available at the moment.</p>
        ) : (
          <ul className="food-list">
            {foodItems.map((food) => (
              <li key={food._id} className="food-item">
                <h3>{food.foodName}</h3>
                <p>
                  <strong>Quantity:</strong> {food.quantity}
                </p>
                <p>
                  <strong>Location:</strong> {food.location}
                </p>
                <p>
                  <strong>Donor:</strong> {food.donor?.name || 'Anonymous'}
                </p>
                <p>
                  <strong>Phone:</strong> {food.donor?.phone || 'Not Available'}
                </p>
                <button onClick={() => handleReceive(food._id)}>Receive</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default AvailableFoodList;
