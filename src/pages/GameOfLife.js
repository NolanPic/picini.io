import React from "react";
import gameOfLife from "../images/game-of-life.gif";
import BackBtn from "../components/BackBtn";

const GameOfLife = () => {
  return (
    <div className="game-of-life page">
      <h1>John Conway's Game of Life</h1>
      <img className="playing" src={gameOfLife} alt="Game of Life" />
      <p>
        I wrote my own implementation of Conway's Game of Life in 3 days. The
        game logic was written in vanilla JS, with the UI built in React, and
        the grid (cells) utilizing CSS Grid.
      </p>

      <p>
        The rules of the game are:
        <ul>
          <li>
            An alive cell must have two or three live neighbors to survive (no
            more! no less!)
          </li>
          <li>A dead cell with three live neighbors comes alive</li>
          <li>A cell in any other condition will die or stay dead</li>
        </ul>
      </p>

      <p>
        Links:
        <br />
        <ul>
          <li>
            <a
              href="https://john-conways-game-of-life.now.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed project
            </a>
          </li>
          <li>
            <a
              href="https://github.com/NolanPic/conways-game-of-life"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github repo
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deeper explanation
            </a>
          </li>
        </ul>
      </p>

      <BackBtn />
    </div>
  );
};

export default GameOfLife;
