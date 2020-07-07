import React from "react";
import avatar from "./images/me.jpeg";
import "./sass/index.scss";

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

      <section id="about">
        <div>
          <h2>About</h2>
          <p>
            I am a full-stack web developer building modern web applications. I
            appreciate good design, both visually and in code. Always curious.
          </p>
        </div>
        <div>
          <h2>Skilled with</h2>
          <ul>
            <li>JS/React/Vue/jQuery</li>
            <li>ASP.NET/C#</li>
            <li>SQL (SQL Server, Postgres)</li>
            <li>Debugging in Chrome DevTools</li>
          </ul>
        </div>
      </section>

      <section id="history">
        <h2>History</h2>
        <table>
          <tr>
            <th>Yrs</th>
            <th>Company</th>
            <th>Title</th>
            <th>Skills</th>
          </tr>
          <tr>
            <td>6.5</td>
            <td>EfinityTech</td>
            <td>Web developer</td>
            <td>ASP.NET</td>
          </tr>
        </table>
      </section>

      <section id="portfolio">
        <h2>Portfolio</h2>
        <table>
          <tr>
            <th>Project</th>
            <th>Description</th>
            <th>Work done/skills used</th>
          </tr>

          <tr>
            <td>Proprietary CMS</td>
            <td>
              An in-house CMS built for 100s of clients to maintain their
              websites
            </td>
            <td>
              Contributed to development and maintenance of a proprietary CMS
              with ASP.NET, SQL, JS, Bootstrap
            </td>
          </tr>

          <tr>
            <td>Business directory for local city</td>
            <td>
              Collaborated with a local city chamber of commerce to design and
              develop a business directory tourism website
            </td>
            <td>
              Utilized Vue, Google Maps API, and REST API. Where SEO was
              important, used ASP.NET server-driven pages
            </td>
          </tr>

          <tr>
            <td>
              <a
                href="https://john-conways-game-of-life.now.sh/"
                target="_blank"
              >
                Conway's Game of Life
              </a>
            </td>
            <td>
              Implemented Conway’s Game of Life using modern web technologies
            </td>
            <td>
              Wrote game logic in vanilla JS, UI in React, and grid utilizing
              CSS Grid
            </td>
          </tr>

          <tr>
            <td>
              <a href="https://neumorphic-todo.now.sh/" target="_blank">
                Neu todo
              </a>
            </td>
            <td>How I todo</td>
            <td>React/styled components</td>
          </tr>
        </table>
      </section>

      <footer>
        <p>Copyright 2020. Fueled by coffee, books, and exploring the pnw. 🌧</p>
      </footer>
    </main>
  );
}

export default App;
