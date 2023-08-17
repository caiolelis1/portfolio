import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./styles.css";

export const Header = () => {
  return (
    <header className="flex w-full text-2xl p-5">
      <div className="flex w-1/12 m-auto">
        <a href="">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/caiolelis1">
          <AiFillGithub />
        </a>
      </div>
      <div className="flex gap-x-10 w-9/12 m-auto justify-end">
        <a href="sobremim">Sobre mim</a>
        <a href="projetos">Projetos</a>
      </div>
      <button className="bg-red-600 px-4 py-2 rounded-md">MEU CURRÍCULO</button>
    </header>
  );
};
