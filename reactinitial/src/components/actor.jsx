import { useState } from "react"
import Button from '@mui/material/Button';


export default function Actor({actor}) {

    const [buttonState, setButtonState] = useState("Show more")
    const showMoreLess = () => {
        if (buttonState === "Show more") {
            setButtonState("Show less")
        } else {
            setButtonState("Show more")
        }
        console.log(buttonState)
    }

  return (
    <li>
      <p>{actor.name}</p>
      <p style={{ display: (buttonState === "Show more") ? "none" : "block" }}>{actor.details}</p>
      <Button variant="contained" onClick={showMoreLess}>{buttonState}</Button>
    </li>
  );
}
