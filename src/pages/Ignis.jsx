import image from "../assets/ignis.svg";
import { Navigation } from "/src/components/Navigation";

const Ignis = () => {
  return (
    <div className="app">
      <img src={image} className="app-logo" alt="Planeten ignis" />
      <p>
        Wohooo!🚀 Det er finalehelg i Labyrinten.
        <br />
        Endre koden i <code>src/pages/Ignis.jsx</code> og lagre for å se
        endringer.
      </p>
      <Navigation />
    </div>
  );
};

export default Ignis;
