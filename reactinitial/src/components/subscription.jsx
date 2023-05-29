import React, { useEffect, useState } from "react";
import '@fontsource/roboto/500.css';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

export default function Subscription() {
  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isComponentVisible, setComponentVisibility] = useState(true)

  useEffect(() => {
    if (isSubscribed) {
      const timer = setTimeout(() => {
        setComponentVisibility(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isSubscribed]);

  useEffect(() => {
    console.log("IsVisible: " + isVisible)
  }, [isVisible])
  
  useEffect(() => {
    console.log("isSubscribed: " + isSubscribed)
  }, [isSubscribed])

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubscription = () => {
    // Check if the input value contains '.' or '@'
    if (inputValue.includes(".") || inputValue.includes("@")) {
      // Perform the desired action
      fetch("https://demoapi.com/api/series/newsletter", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({"e-mail" : inputValue}),
      })
      .then((res) => {
        if (res.ok) {
          setIsSubscribed(true);
        }
      });
    } else {
      console.log("Invalid email address or domain");
    }
    setIsVisible(false);
  };


  return (
    <>
      {isComponentVisible && (
        <div className="subscribe">
          <h3>Subscribe to our Newsletter</h3>
          {isVisible && (
            <>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" type="text" value={inputValue} onChange={handleChange}/>
              <Button variant="contained" onClick={handleSubscription} style={{maxHeight: '56px', minHeight: '56px'}}>Send</Button>
            </>
          )}
          {isSubscribed && <span>Subscribed!</span>}
        </div>
      )}
    </>
  );
}
