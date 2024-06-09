import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/Atividade1">Atividade 01</Link>
          </li>
          <li>
            <Link to="/Atividade2">Atividade 02</Link>
          </li>
          <li>
            <Link to="/Atividade3">Atividade 03</Link>
          </li>
          <li>
            <Link to="/Atividade4">Atividade 04</Link>
          </li>
          <li>
            <Link to="/Atividade5">Atividade 05</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;