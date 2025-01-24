import { Calendar, ChevronRight, GraduationCap } from "lucide-react";
import Container from "./Container";

const Academic = () => {
  const education = [
    {
      degree: "Master Expert Informatique et Système d'Information (EISI)",
      school: "EPSI",
      period: "2022 - 2024",
      description:
        "Spécialisation dans l'analyse des besoins S.I. de l'entreprise, la conception de stratégie S.I. et Data en alignement avec la stratégie buisness de l'entreprise. Ainsi que le développement, intégration, sécurisation et maintenance de solutions applicatives dans différents environnements (mobiles, embarqués, ERP, cloud...)",
      achievements: [
        {
          description: "Certification RNCP35584 Niveau 7 (BAC+5)",
          links: [
            {
              category: "Article",
              url: "https://www.epsi-formations.pro/formation/expert-en-informatique-et-systeme-dinformation",
            },
          ],
        },
        {
          description:
            "Alternance Référent Technique SNCF Voyageurs (Projet Hastus)",
          links: [
            {
              category: "Article",
              url: "https://www.giro.ca/fr-fr/actualites/etudes-de-cas/sncf/",
            },
          ],
        },
        {
          description: "Développement d'Application Mobile React Native",
          links: [
            {
              category: "Projet React Native",
              url: "https://gitlab.com/william-donnette/mspr1-mobile-app",
            },
          ],
        },
        {
          description: "Développement & Intégration d'API",
          links: [
            {
              category: "Projet Python Flask",
              url: "https://gitlab.com/mspr2-big-data/mspr2-api-python",
            },
            {
              category: "Projet C# n°1",
              url: "https://gitlab.com/william-donnette/api-mspr",
            },
            {
              category: "Projet C# n°2",
              url: "https://gitlab.com/william-donnette/mspr1-api-webshop",
            },
            {
              category: "Projet PHP Laravel",
              url: "https://github.com/william-donnette/preserva",
            },
          ],
        },
        {
          description: "Conception et Intégration de stratégie CI/CD",
          links: [],
        },
        {
          description:
            "Configuration sécurisée d'un serveur self-managed Debian avec déploiement de Docker.",
          links: [],
        },
        {
          description:
            "Développement de modèles d'IA en Machine Learning et Deep Learning",
          links: [
            {
              category: "Projet Python Machine Learning",
              url: "https://colab.research.google.com/drive/118wWt86AgH0iVuVYtT0mpEgYxzpHk3YI?usp=sharing",
            },
            {
              category: "Projet Python Machine Learning",
              url: "https://colab.research.google.com/drive/10R_LaG9Wc-4etv6G43pwkJw1oBbsqRqV?usp=sharing",
            },
          ],
        },
        {
          description:
            "Rédaction de rapports d'analyse et conception de stratégies S.I. ainsi que de cahier des charges",
          links: [],
        },
      ],
    },
    {
      degree:
        "Licence Professionnelle Assistant de Projet Informatique, Développement d'Applications WEB/E-Buisness (APIDAE)",
      school: "Université de Montpellier",
      period: "2021 - 2022",
      description:
        "La licence professionnelle des métiers de l'informatique, option développeur d'applications web vise à former des étudiants aux techniques informatiques permettant de répondre aux enjeux du web et du e-business avec une originalité très forte et très demandée par les entreprises: la double compétence afin de maîtriser à la fois les aspects techniques et les aspects organisationnels.",
      achievements: [
        {
          description: "Certification professionnelle RNCP Niveau 6 (BAC+3)",
          links: [
            {
              category: "Article",
              url: "https://iut-montpellier-sete.edu.umontpellier.fr/files/2020/01/Fiche-de-formation-LP-APIDAE_R_V_2020.pdf",
            },
          ],
        },
        {
          description: "Alternance Développeur WEB FullStack",
          links: [],
        },
        {
          description: "Développement de sites WEB",
          links: [
            {
              category: "Projet PHP Symfony",
              url: "https://github.com/william-donnette/projet-concert/tree/master",
            },
            {
              category: "Projet VueJS",
              url: "https://github.com/Adrien-Segura/recette-vuejs",
            },
          ],
        },
        {
          description: "Développement de Jeux",
          links: [
            {
              category: "Projet Java Morpion Multi-Joueur",
              url: "https://github.com/william-donnette/morpion-java",
            },
            {
              category: "Projet Java Tamagoshi",
              url: "https://github.com/william-donnette/tamagoshi",
            },
          ],
        },
        {
          description: "Développement & Intégration d'API",
          links: [
            {
              category: "Projet Node",
              url: "https://github.com/william-donnette/tp-node-recettes",
            },
          ],
        },
        {
          description: "Architecture et Conception de Base de Données",
          links: [],
        },
        {
          description:
            "Adoption des méthodes agiles (Scrum, pair programming), des design patterns et du clean code.",
          links: [
            {
              category: "Projet Java Design Pattern Complexe",
              url: "https://github.com/william-donnette/catalogue",
            },
          ],
        },
      ],
    },
    {
      degree: "Diplôme Universitaire de Technologie en Informatique (DUT)",
      school: "Université de Montpellier",
      period: "2019 - 2021",
      description:
        "Cet enseignement vise à rendre les étudiants opérationnels pour des activités d'analyse, de programmation et d'exploitation des ordinateurs, capables de s'adapter à l'évolution rapide des techniques et de l'environnement ainsi qu'à être aptes à poursuivre des études supérieures, par l'acquisition des fondamentaux théoriques de la discipline informatique.",
      achievements: [
        {
          description: "Certification professionnelle RNCP Niveau 5 (BAC+2)",
          links: [
            {
              category: "Article",
              url: "https://iut-montpellier-sete.edu.umontpellier.fr/files/2020/01/Fiche-de-formation-DUT-Info_R_V_2020.pdf",
            },
          ],
        },
        {
          description: "Stage Développeur WEB",
          links: [],
        },
        {
          description: "Développement de Jeux",
          links: [
            {
              category: "Projet Java Escape Game",
              url: "https://github.com/IUTInfoMontp-M2105/M2105-EscapeGame-S5",
            },
            {
              category: "Projet Java Sudoku",
              url: "https://github.com/IUTInfoMontp-M4105C/td-sudoku-william-donnette",
            },
          ],
        },
        {
          description: "Développement de sites WEB",
          links: [
            {
              category: "Projet PHP MVC",
              url: "https://github.com/IUTProjetS3/Projet_PHP",
            },
          ],
        },
        {
          description: "Développement de Logiciels",
          links: [
            {
              category: "Projet Java Compte Bancaire",
              url: "https://github.com/IUTInfoMontp-M3105/td1-william-donnette",
            },
            {
              category: "Projet Java Service Scolarité",
              url: "https://github.com/IUTInfoMontp-M3105/td2-william-donnette",
            },
          ],
        },
        {
          description:
            "Adoption des méthodes agiles (Scrum, pair programming), des design patterns et du clean code.",
          links: [
            {
              category: "Projet Java Design Pattern Avion",
              url: "https://github.com/IUTInfoMontp-M3105/td3-william-donnette",
            },
            {
              category: "Projet Java Design Pattern Voiture",
              url: "https://github.com/IUTInfoMontp-M3105/td5-william-donnette",
            },
            {
              category: "Projet Java Design Pattern Personne",
              url: "https://github.com/IUTInfoMontp-M3105/td6-william-donnette",
            },
          ],
        },
      ],
    },
  ];

  return (
    <Container id="academic">
      <h2 className="text-4xl font-bold text-center mb-12">
        Formation académique
      </h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-blue-600">
            <div className="absolute -left-4 top-0">
              <div className="bg-blue-600 rounded-full p-2">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{edu.period}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {edu.degree}
              </h3>
              <h4 className="text-lg text-blue-600 mb-3">{edu.school}</h4>
              <p className="text-gray-600 mb-4">{edu.description}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {edu.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="">
                    {achievement.description}
                    <div className="flex gap-2">
                      {achievement.links.map((link) => (
                        <a
                          className="hover:underline bg-blue-200 rounded-full px-2 text-xs items-center text-blue-500 flex w-fit"
                          href={link.url}
                        >
                          {link.category}
                          <ChevronRight className="w-4" />
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

export default Academic;
