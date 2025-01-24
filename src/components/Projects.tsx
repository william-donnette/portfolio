// import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React, Node.js, and MongoDB",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      description: "A weather application with interactive maps and forecasts",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b",
      technologies: ["React", "OpenWeather API", "Mapbox", "TailwindCSS"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <Github size={20} className="mr-1" /> */}
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <ExternalLink size={20} className="mr-1" /> */}
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
