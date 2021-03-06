import React from "react";
import LinkBtn from "../components/LinkBtn";

const Home = () => {
  return (
    <>
      <section id="about">
        <div>
          <h2>About</h2>
          <p>
            I am a full-stack engineer with 7 years of experience in the web
            industry. I work in both modern and legacy codebases, and can
            quickly learn tools and languages.
          </p>
        </div>
        <div>
          <h2>Skills</h2>
          <ul>
            <li>Javascript (7 years)</li>
            <li>React/Vue</li>
            <li>NodeJS/REST</li>
            <li>ASP.NET/C#</li>
            <li>SQL</li>
            <li>Python</li>
          </ul>
        </div>
      </section>

      <section id="history">
        <h2>Experience</h2>

        <div className="card-wrap">
          <div className="card">
            <h3 className="card-title">EfinityTech</h3>
            <div className="card-body">
              <ul>
                <li>Years: 6.5</li>
                <li>Title: Web developer</li>
                <li>Skills: ASP.NET/JS/SQL</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <h2>Projects</h2>
        <div className="card-wrap">
          {/* CMS card */}
          <div className="card">
            <h3 className="card-title">Proprietary CMS</h3>

            <div className="description">
              <h4>Description</h4>
              <p>
                An in-house CMS built for clients to maintain their websites.
              </p>
            </div>

            <div className="work-done">
              <h4>Skills used</h4>
              <p>
                Contributed to development and maintenance of a proprietary CMS
                with ASP.NET, SQL, JS, Bootstrap
              </p>
            </div>

            <LinkBtn to="/cms">More &gt;</LinkBtn>
          </div>

          {/* Business directory card */}
          <div className="card">
            <h3 className="card-title">Business directory for local city</h3>
            <div className="description">
              <h4>Description</h4>
              <p>
                Collaborated with a local city chamber of commerce to design and
                develop a business directory tourism website.
              </p>
            </div>

            <div className="work-done">
              <h4>Skills used</h4>
              <p>
                Utilized Vue, Google Maps API, and custom REST API. Where SEO
                was important, used ASP.NET server-driven pages
              </p>
            </div>
          </div>

          {/* Game of Life card */}
          <div className="card">
            <h3 className="card-title">Conway's Game of Life</h3>
            <div className="description">
              <h4>Description</h4>
              <p>
                Implemented Conway’s Game of Life using modern web technologies.
              </p>
            </div>

            <div className="work-done">
              <h4>Skills used</h4>
              <p>
                Wrote game logic in vanilla JS, UI in React, and grid utilizing
                CSS Grid
              </p>
            </div>

            <LinkBtn to="/game-of-life">More &gt;</LinkBtn>
          </div>

          {/* Neumorphic todo card */}
          <div className="card">
            <h3 className="card-title">Neu todo</h3>
            <div className="description">
              <h4>Description</h4>
              <p>Simple todo in the style of Neumorphism.</p>
            </div>

            <div className="work-done">
              <h4>Skills used</h4>
              <p>React/styled components</p>
            </div>

            <LinkBtn to="https://neumorphic-todo.now.sh/">View &gt;</LinkBtn>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
