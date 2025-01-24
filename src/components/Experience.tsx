// import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import Container from "./Container";

const Experience = () => {
  const experiences = [
    {
      position: "Développeur FullStack",
      company: "ABES",
      location: "Montpellier, FR",
      url: "https://abes.fr/",
      period: "2024 - Present",
      description:
        "Maintenance et Développement de sites WEB de gestion bibliographiques de l'enseignement supérieur.",
      achievements: [
        {
          description: "Maintenances de sites WEB",
          links: [
            {
              category: "Site Theses.fr",
              url: "https://theses.fr/",
            },
            {
              category: "Site Sudoc",
              url: "https://www.sudoc.abes.fr/",
            },
            {
              category: "Site Licences Nationales",
              url: "https://www.licencesnationales.fr/",
            },
          ],
        },
        {
          description: "Développement de sites Front-End (TypeScript VueJS)",
          links: [],
        },
        {
          description: "Développement de sites Back-End (Java Spring Boot)",
          links: [],
        },
        {
          description: "Dockerisation d'applications",
          links: [],
        },
        {
          description: "Gestion de projet SCRUM (Jira)",
          links: [],
        },
      ],
    },
    {
      position: "Alternance Référent Technique HASTUS",
      company: "SNCF Voyageurs",
      location: "Montpellier, FR",
      period: "2022 - 2024",
      description:
        "Dans le cadre du projet OSCAR, la SNCF se prépare à l'arrivée de la concurrence et revoit entièrement la stratégie de son S.I. dans la planification du plan de transport. Dans ce contexte, elle déploie un nouveau progiciel nommé Hastus qui vise à remplacer 7 des logiciels existants. J'ai rejoint l'équipe d'Occitanie qui a pour mission de mettre en production ce nouveau logiciel et d'apporter les nouveaux processus aux différents collaborateurs qui exploite ce plan de transport.",
      achievements: [
        {
          description: "Développement d'un ETL interne (JavaScript NodeJS)",
          links: [],
        },
        {
          description: "Gestion de projet Agile",
          links: [],
        },
        {
          description:
            "Qualité de données (Collecte, Nettoyage, Standardisation)",
          links: [],
        },
        {
          description: "Conduite de changement et Formations",
          links: [],
        },
        {
          description: "Rédactions de rapports et fiches process (BPMN)",
          links: [],
        },
      ],
    },
    {
      position: "Alternance Développeur WEB FullStack",
      company: "A3CDigital",
      location: "Montpellier, FR",
      period: "2021-2022",
      description: "",
      achievements: [
        {
          description: "Maintenances de sites WEB (WordPress)",
          links: [
            {
              category: "Site Estimer Immobilier",
              url: "https://estimer-immobilier.com/",
            },
          ],
        },
        {
          description: "Développement de plugins WordPress (PHP MVC natif)",
          links: [],
        },
        {
          description: "Architecture de base de Données (MariaDB)",
          links: [],
        },
        {
          description:
            "Développement Front-End d'estimateur immobilier (JavaScript)",
          links: [],
        },
        {
          description:
            "Développement Back-End d'API d'estimation immobilière avec Machine Learning (PHP Laravel, RubixML)",
          links: [],
        },
        {
          description: "Data Mining et Data Scrapping de données immobilières",
          links: [],
        },
        {
          description:
            "Mise en place de WEB Analyse (Google Analytics, Google Tag Manager)",
          links: [],
        },
      ],
    },
    {
      position: "Stage Développeur WEB",
      company: "A3CDigital",
      location: "Montpellier, FR",
      period: "Printemps 2021",
      description: "",
      achievements: [
        {
          description: "Maintenances de sites WEB (WordPress)",
          links: [
            {
              category: "Site Estimer Immobilier",
              url: "https://estimer-immobilier.com/",
            },
          ],
        },
        {
          description: "Développement de plugins WordPress (PHP MVC natif)",
          links: [],
        },
      ],
    },
  ];

  return (
    <Container id="experience">
      <h2 className="text-4xl font-bold text-center mb-12">
        Expériences Professionnelles
      </h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-blue-600">
            <div className="absolute -left-4 top-0">
              <div className="bg-blue-600 rounded-full p-2">
                {/* <Briefcase className="w-4 h-4 text-white" /> */}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center text-gray-600 mb-2">
                {/* <Calendar className="w-4 h-4 mr-2" /> */}
                <span>{exp.period}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {exp.position}
              </h3>
              <h4 className="text-lg text-blue-600 mb-1">{exp.company}</h4>
              <p className="text-gray-500 mb-3">{exp.location}</p>
              <p className="text-gray-600 mb-4">{exp.description}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="">
                    {achievement.description}
                    <div className="flex gap-2">
                      {achievement.links.map((link) => (
                        <a
                          className="hover:underline bg-blue-200 rounded-full px-2 text-xs items-center text-blue-500 flex w-fit"
                          href={link.url}
                        >
                          {link.category}
                          {/* <ChevronRight className="w-4" /> */}
                        </a>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Experience;
