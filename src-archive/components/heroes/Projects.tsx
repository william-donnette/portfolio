import { FunctionComponent } from "react";
import QRCode from "react-qr-code";
import Container from "../Container";

interface Projects {
  title: string;
  description: string;
  url?: string;
  skills: {
    category: string;
    skills: string[];
  }[];
}

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
  const projects: Projects[] = [
    {
      title: "Hom'Kizz",
      description:
        "Hom'Kizz est un projet initialement développé avec un collaborateur dans le cadre de notre exploration de nouvelles technologies et de l'amélioration de nos compétences. Aujourd'hui, il évolue avec pour ambition de devenir un produit commercial, offrant des solutions digitales innovantes pour le secteur de l'immobilier.",
      url: "https://homkizz.com",
      skills: [
        {
          category: "Front-End",
          skills: [
            "Développement en TypeScript sur NextJS",
            "Composants créés avec ReactJS, AntDesign & TailwindCSS",
            "Utilisation de l’intégrateur RefineDev",
            "Mise en place d’analyse statistiques sur Matomo",
            "Optimisation du SEO",
            "Internationalisation avec  la librarie I18N",
          ],
        },
        {
          category: "Back-End",
          skills: [
            "Architecture de Base de Données PostgreSQL",
            "Utilisation du DaaS / BaaS Hasura",
            "Création d’API REST & GraphQL",
            "Développement d’une IA Deep Learning avec Python Tensorflow",
          ],
        },
        {
          category: "DevOps",
          skills: [
            "Dockerisation intégrale de tous les micro-services via Docker",
            "Utilisation d’un serveur self-managed sur Debian",
            "Mise en place de CI/CD via Gitlab-CI",
            "Vérification de la QA via SonarQube, Cypress & Mocha",
          ],
        },
        {
          category: "IAM",
          skills: ["Utilisation de Keycloak pour l’authentication SSO par JWT"],
        },
      ],
    },
    {
      title: "Lauritz.exe",
      description:
        "Lauritz est un ETL développé par la SNCF pour gérer les flux de données entre les différents logiciels de leur SI de planification de plan de transport.",
      skills: [
        {
          category: "Back-End",
          skills: ["Développement de packages en TypeScript avec Yarn"],
        },
        {
          category: "DevOps",
          skills: [
            "Mise en place de CI/CD via Github Actions",
            "Vérification de la QA via  Cypress & Mocha",
          ],
        },
      ],
    },
    {
      title: "Estimer-Immobilier",
      description:
        "Estimer-Immobilier est un site développé par DomData dans le but d’acquérir les contacts de potentiels vendeurs de biens immobiliers en France, Suisse & Monaco.",
      url: "https://estimer-immobilier.com",
      skills: [
        {
          category: "Back-End",
          skills: [
            "Architecture de Base de Données MariaDB",
            "Développement de plugins WordPress PHP",
            "Développement d’API REST avec Laravel",
            "Utilisation de la librairie de Machine Learning RubixML",
          ],
        },
        {
          category: "Front-End",
          skills: [
            "Mise en place de Google Analytics & Google Tag Manager",
            "Développement d’un WebComponent d’estimateur immobilier en ReactJS",
          ],
        },
      ],
    },
  ];

  return (
    <Container className="flex flex-col gap-10">
      <h3 className="text-4xl ">Projets</h3>
      {projects.map((project) => {
        return (
          <div>
            <div className="flex flex-row justify-between">
              <div className="flex-1 w-full max-w-3xl">
                <div className="bg-blue-900 text-white h-min w-fit px-2 py-1 rounded font-bold uppercase">
                  <h4>{project.title}</h4>
                </div>
                <p className="text-gray-600">{project.description}</p>
                <ul className="list-inside">
                  {project.skills.map((skill) => {
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
              {project.url && (
                <div className="flex flex-col items-center max-w-lg w-fit gap-2">
                  <QRCode size={150} value={project.url} />
                  <span className="w-fit">{project.url}</span>
                  {/* <h5 className="text-sm normal-case">{project.subtitle}</h5>
                <p className="w-fit">RNCP Niveau {project.level}</p>
                <p className="w-fit">Bac {project.highschoolLevel}</p> */}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default Projects;
