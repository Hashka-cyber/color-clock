import { useEffect, useState } from "react";
import { format } from "date-fns";
import "./App.css";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <h1>Dynamic Color Clock</h1>

      <p className="clock">
        {format(currentDate, "MMMM dd, yyyy hh:mm:ss a")}
      </p>
    </div>
  );
}

export default App;