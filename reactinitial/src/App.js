import React, { useEffect, useState } from "react";
import LoadingMask from "./components/loadingmask";
import Character from "./components/character";
import Subscription from "./components/subscription";
import '@fontsource/roboto/500.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [actorData, setActorData] = useState([]);
  const [showSubscription, setShowSubscription] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://demoapi.com/api/series/howimetyourmother');
        const data = await response.json();
        setActorData(data);
      } catch (error) {
        // Handle errors
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSubscription(true);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <h1>Series Api</h1>
      {isLoading ? (
        <LoadingMask />
      ) : (
        <div>
          <Character actorData={actorData} />
          {showSubscription && <Subscription />}
        </div>
      )}
    </div>
  );
};

export default App;