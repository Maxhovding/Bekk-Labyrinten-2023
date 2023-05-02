import image from "../assets/whoops.svg";
import { Link } from "react-router-dom";

const OhNo = () => {
  return (
    <div className="app">
      <img src={image} className="app-logo" alt="logo" />
      <p>
        <code>404</code> | Whoops!
      </p>
      <p>Her har vi visst glemt å legge inn en side...</p>
      <Link to="/" className="button">
        Hjem
      </Link>
    </div>
  );
};

export default OhNo;
