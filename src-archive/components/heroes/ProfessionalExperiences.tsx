import { FunctionComponent } from "react";
import { displayDuration } from "../../utils/displayDuration";
import Container from "../Container";

interface ProfessionalExperiences {
  title: string;
  place: string;
  startedAt: Date;
  endedAt?: Date;
  skills: {
    category: string;
    skills: string[];
  }[];
}

interface ProfessionalExperiencesProps {}

const ProfessionalExperiences: FunctionComponent<
  ProfessionalExperiencesProps
> = () => {
  const professionalExperiences: ProfessionalExperiences[] = [
    {
      title: "Développeur Full Stack",
      place: "ABES",
      startedAt: new Date(2024, 12 - 1),
      skills: [
        {
          category: "Développement",
          skills: ["Maintenance de Site Internet", "Projet SCRUM"],
        },
      ],
    },
    {
      title: "Alternance Référent Technique",
      place: "SNCF Voyageurs",
      startedAt: new Date(2022, 8 - 1),
      endedAt: new Date(2024, 10 - 1),
      skills: [
        {
          category: "Développement",
          skills: [
            "Déploiement du progiciel Hastus",
            "Développement d'un ETL interne en JavaScript",
          ],
        },
        {
          category: "Gestion de Projet",
          skills: ["Méthodes Agiles", "Création de cahier des charges"],
        },
      ],
    },
    {
      title: "Alternance Développeur WEB",
      place: "DomData",
      startedAt: new Date(2021, 9 - 1),
      endedAt: new Date(2022, 9 - 1),
      skills: [
        {
          category: "Développement",
          skills: [
            "Architecture de Base de Données",
            "Développement de plugins WordPress PHP",
            "Mise en place de Google Analytics & Google Tag Manager",
          ],
        },
      ],
    },
    {
      title: "Stage Développeur WEB",
      place: "A3CDigital",
      startedAt: new Date(2021, 3 - 1),
      endedAt: new Date(2021, 5 - 1),
      skills: [
        {
          category: "Développement",
          skills: ["Création de sites WEB"],
        },
      ],
    },
  ];

  return (
    <Container className="flex flex-col gap-10">
      <h3 className="text-4xl ">Expériences Professionnelles</h3>
      {professionalExperiences.map((professionalExperience) => {
        return (
          <div>
            <div className="flex flex-row justify-between">
              <div>
                <div className="bg-blue-900 text-white h-min w-fit px-2 py-1 rounded font-bold uppercase">
                  <h4>{professionalExperience.title}</h4>
                </div>
                <p className="text-gray-600">{professionalExperience.place}</p>
                <ul className="list-inside">
                  {professionalExperience.skills.map((skill) => {
                    return (
                      <>
                        <li className="uppercase mt-5">{skill.category}</li>
                        <ul className="list-disc list-inside">
                          {skill.skills.map((skill) => {
                            return <li>{skill}</li>;
                          })}
                        </ul>
                      </>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col items-end max-w-lg w-full">
                <span className="text-sm normal-case">
                  {displayDuration(
                    professionalExperience.startedAt,
                    professionalExperience.endedAt
                  )}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default ProfessionalExperiences;
