// App.jsx
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container">
      <h1>Digital Clock</h1>
      <p className="clock-time">
        {format(currentTime, 'eeee, MMMM do yyyy, HH:mm:ss')}
      </p>
    </div>
  );
}

export default App;
