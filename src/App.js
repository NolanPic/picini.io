import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import avatar from "./images/me.jpeg";
import "./sass/index.scss";
import Home from "./pages/Home";
import CMS from "./pages/CMS";
import GameOfLife from "./pages/GameOfLife";
import { useTracking } from "./hooks/useTracking";

function App() {
  // analytics
  useTracking("UA-164019317-2");

  return (
    <main>
      <section id="intro">
        <div class="avatar">
          <Link to="/">
            <img src={avatar} alt="hey it's me" />
          </Link>
        </div>
        <div class="intro-text">
          <Link to="/">
            <h1>Nolan Picini</h1>
          </Link>
          <h3>
            Full-stack Web Developer{" "}
            <span role="img" aria-label="laptop">
              💻
            </span>
          </h3>
        </div>
        <div class="links">
          <a href="mailto:nolan@picini.io" class="button">
            Contact Nolan
          </a>
          <a
            href="https://www.linkedin.com/in/nolan-picini-30393799/"
            target="_blank"
            rel="noopener noreferrer"
            class="button"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/NolanPic"
            target="_blank"
            rel="noopener noreferrer"
            class="button"
          >
            GitHub
          </a>
        </div>
      </section>

      <Switch>
        <Route path="/cms">
          <CMS />
        </Route>
        <Route path="/game-of-life">
          <GameOfLife />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <footer>
        <p>
          Copyright 2020. Fueled by coffee, books, and exploring the pnw.{" "}
          <span role="img" aria-label="clouds raining">
            🌧
          </span>
        </p>
      </footer>
    </main>
  );
}

export default App;
