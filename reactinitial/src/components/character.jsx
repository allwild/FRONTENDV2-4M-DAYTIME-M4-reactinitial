import '@fontsource/roboto/500.css';
import Actor from "./actor";

export default function Character({ actorData }) {

  return (
    <div>
      <h2>Actors:</h2>
      <ul>
        {actorData.map((actor, index) => (
            <Actor key={index} actor={actor}/>
        ))}
      </ul>
    </div>
  );
}
