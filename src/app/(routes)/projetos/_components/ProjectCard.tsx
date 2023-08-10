import Image from "next/image";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

interface IProjectCardProps {
  name: string;
  description: string;
  link: string;
}

export const ProjectCard = (props: IProjectCardProps) => {
  const { name, description, link } = props;
  return (
    <div className="border rounded p-6">
      <h2 className="text-center text-4xl">{name}</h2>
      <Image src={""} alt="Ainda estaqmos sem imagem F" />
      <p>{description}</p>
      <a href={link} className="flex mt-3 justify-end">
        <AiFillGithub />
      </a>
    </div>
  );
};
