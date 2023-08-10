import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  FaCss3Alt,
  FaReact,
  FaLaravel,
  FaBootstrap,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiPhp,
  SiTypescript,
  SiNextdotjs,
  SiMysql,
  SiTailwindcss,
  SiCplusplus,
  SiC,
} from "react-icons/si";
import { DiJavascript } from "react-icons/di";

import "./styles.css";

const SobreMim: React.FC = () => {
  return (
    <div className="w-10/12 m-auto flex h-[calc(100vh-88px)] items-center">
      <div className="w-1/2">
        <div className="w-10/12 m-auto">
          <h2 className="text-title capitalize text-6xl text-center font-bold">
            Sobre Mim
          </h2>
          <div className="mt-6">
            <p>O texto que farei sobre mim!</p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              aliquam purus accumsan, vestibulum odio sed, porta nunc. Donec
              auctor justo et sollicitudin dapibus. Nulla nec convallis lectus.
              Sed lacinia elementum dignissim. In tempus urna sit amet turpis
              iaculis, sed congue leo porta. Proin placerat, sapien a maximus
              tincidunt, massa tellus blandit nisl, nec dignissim ante purus sed
              sapien. Etiam eu mollis enim. Aenean dictum risus vel mi malesuada
              commodo. Donec tellus libero, venenatis egestas ex ac, commodo
              varius lorem. Sed maximus purus ipsum, ac tincidunt lectus varius
              at.
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              aliquam purus accumsan, vestibulum odio sed, porta nunc. Donec
              auctor justo et sollicitudin dapibus. Nulla nec convallis lectus.
              Sed lacinia elementum dignissim. In tempus urna sit amet turpis
              iaculis, sed congue leo porta. Proin placerat, sapien a maximus
              tincidunt, massa tellus blandit nisl, nec dignissim ante purus sed
              sapien. Etiam eu mollis enim. Aenean dictum risus vel mi malesuada
              commodo. Donec tellus libero, venenatis egestas ex ac, commodo
              varius lorem. Sed maximus purus ipsum, ac tincidunt lectus varius
              at.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="border rounded w-10/12 m-auto">
          <h2 className="text-center text-3xl font-semibold">
            Linguagens e frameworks
          </h2>
          <div className="w-2/3 m-auto grid grid-cols-4 gap-x-8 gap-y-4 my-4">
            <AiFillHtml5 />
            <FaCss3Alt />
            <DiJavascript />
            <SiTypescript />
            <SiPhp />
            <FaReact />
            <SiNextdotjs />
            <FaNodeJs />
            <SiMysql />
            <FaLaravel />
            <SiTailwindcss />
            <FaBootstrap />
            <SiC />
            <FaJava />
            <SiCplusplus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreMim;
