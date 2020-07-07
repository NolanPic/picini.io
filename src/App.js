import React from "react";
import { Switch, Route } from "react-router-dom";
import avatar from "./images/me.jpeg";
import "./sass/index.scss";
import Home from "./pages/Home";

function App() {
  return (
    <main>
      <section id="intro">
        <div class="avatar">
          <img src={avatar} alt="hey it's me" />
        </div>
        <div class="intro-text">
          <h1>Nolan Picini</h1>
          <h3>Full-stack Web Developer 💻</h3>
        </div>
        <div class="links">
          <a href="mailto:nolan@picini.io" class="button">
            Contact Nolan
          </a>
          <a
            href="https://www.linkedin.com/in/nolan-picini-30393799/"
            target="_blank"
            class="button"
          >
            LinkedIn
          </a>
          <a href="https://github.com/NolanPic" target="_blank" class="button">
            GitHub
          </a>
        </div>
      </section>

      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <footer>
        <p>Copyright 2020. Fueled by coffee, books, and exploring the pnw. 🌧</p>
      </footer>
    </main>
  );
}

export default App;
