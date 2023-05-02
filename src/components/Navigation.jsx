import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => (
  <nav>
    <Link to="/" className="button">
      Hjem
    </Link>
    <Link to="/ignis" className="button">
      Gå til Ignis
    </Link>
    <a className="button" href="https://www.1001spill.no/">
      Dette er en mer tullete knapp
    </a>
  </nav>
);
