import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const Header = () => {
  return (
    <header className="flex">
      <div className="flex">
        <a href="">
          <AiFillLinkedin />
        </a>
        <a href="">
          <AiFillGithub />
        </a>
      </div>
      <button>Meu currículo</button>
    </header>
  );
};
