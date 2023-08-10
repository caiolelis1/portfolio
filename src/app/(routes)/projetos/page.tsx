import React from "react";
import { ProjectCard } from "./_components/ProjectCard";

const Projetos = () => {
  return (
    <div className="w-3/4 m-auto">
      <div>
        <h2 className="text-title capitalize text-6xl text-center font-bold">
          Projetos
        </h2>
        <div className="grid grid-cols-3 gap-4 mt-10">
          <ProjectCard
            name="Avaliação 360"
            description="Projeto que consistiu na criação de um sistema de avaliação de desempenho. Foi necessário criar uma plataforma na qual na qual membros da equipe Fórmula Tesla UFMG avaliassem seus colegas de maneira anônima, dependendo de seu cargo."
            link="https://github.com/Tesla-UFMG/avaliacao-360"
          />
          <ProjectCard
            name="SUATI Web"
            description="Projeto que consistiu na criação de um sistema para gerenciar horas de trabalho, tarefas e cronogramas dos membros da equipe Fórmula Tesla UFMG."
            link=""
          />
          <ProjectCard
            name="Janela de Análise"
            description="Projeto que consistiu na manutenção e na alteração do código de uma janela de análise de arquivos txt (datalogs) que continham múltiplos dados do carro da equipe Fórmula Tesla UFMG."
            link=""
          />
          <ProjectCard
            name="Janela de Dados"
            description="Projeto que consistiu na manutenção e na alteração do código de uma interface de telemetria que recebia e mostrava os dados do carro da equipe Fórmula Tesla UFMG em tempo real."
            link="https://github.com/Tesla-UFMG/Interface/tree/teste"
          />
        </div>
      </div>
    </div>
  );
};

export default Projetos;
