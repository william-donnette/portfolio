import { FunctionComponent } from "react";
import Container from "../../../src-archive/components/Container";
import { displayDuration } from "../../../src-archive/utils/displayDuration";

interface AcademicTraining {
  title: string;
  subtitle: string;
  startedAt: Date;
  endedAt?: Date;
  level: number;
  highschoolLevel: string;
  place: string;
  skills: string[];
}

interface AcademicTrainingProps {}

const AcademicTraining: FunctionComponent<AcademicTrainingProps> = () => {
  const academicTraining: AcademicTraining[] = [
    {
      title: "Master EISI",
      subtitle: "Expert Informatique et Systèmes d'Informations",
      startedAt: new Date(2022, 9 - 1),
      endedAt: new Date(2024, 10 - 1),
      level: 7,
      highschoolLevel: "+5",
      place: "EPSI",
      skills: [
        "Cybersécurité & Orchestration",
        "Big Data & Intelligence Artificielle",
        "Gestion de Projet Agile",
        "Systèmes d'Informations",
        "Management & Buisness Analyse",
      ],
    },
    {
      title: "Licence Professionnelle APIDAE",
      subtitle:
        "Assistant de Projet Informatique, Développement d'Applications WEB/E-Buisness",
      startedAt: new Date(2021, 9 - 1),
      endedAt: new Date(2022, 9 - 1),
      level: 6,
      highschoolLevel: "+3",
      place: "Université de Montpellier",
      skills: [
        "Développement WEB",
        "Architecture de Base de Données",
        "Clean Code & Design Pattern",
      ],
    },
    {
      title: "DUT  Informatique",
      subtitle: "Diplôme Universitaire de Technologie en Informatique",
      startedAt: new Date(2019, 9 - 1),
      endedAt: new Date(2021, 9 - 1),
      level: 5,
      highschoolLevel: "+2",
      place: "Université de Montpellier",
      skills: [
        "Base de la programmation",
        "Base du fonctionnement réseau",
        "Spécialisation Mathématique",
      ],
    },
    {
      title: "BAC S",
      subtitle: "Baccalauréat Général Scientifique (Science de l'Ingénieur)",
      startedAt: new Date(2016, 9 - 1),
      endedAt: new Date(2019, 6 - 1),
      level: 4,
      highschoolLevel: "",
      place: "Lycée Galilée",
      skills: [],
    },
  ];

  return (
    <Container className="flex flex-col gap-10">
      <h3 className="text-4xl ">Formations</h3>
      {academicTraining.map((academicTraining) => {
        return (
          <div>
            <div className="flex flex-row justify-between">
              <div>
                <div className="bg-blue-900 text-white h-min w-fit px-2 py-1 rounded font-bold uppercase">
                  <h4>{academicTraining.title}</h4>
                </div>
                <p className="text-gray-600">{academicTraining.place}</p>
                <ul className="list-disc list-inside">
                  {academicTraining.skills.map((skill) => {
                    return <li>{skill}</li>;
                  })}
                </ul>
              </div>
              <div className="flex flex-col items-end max-w-lg w-full">
                <span className="text-sm normal-case">
                  {displayDuration(
                    academicTraining.startedAt,
                    academicTraining.endedAt
                  )}
                </span>
                <h5 className="text-sm normal-case">
                  {academicTraining.subtitle}
                </h5>
                <p className="w-fit">RNCP Niveau {academicTraining.level}</p>
                <p className="w-fit">Bac {academicTraining.highschoolLevel}</p>
              </div>
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default AcademicTraining;
