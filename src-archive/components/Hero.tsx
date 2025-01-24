import { ArrowRight } from "lucide-react";
import Container from "./Container";

const Hero = () => {
  return (
    <Container id="home" className="min-h-screen flex items-center pt-16">
      {/* <div className="container mx-auto px-4"> */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Hey, Je suis <span className="text-blue-600">William Donnette</span>
          </h1>
          <p className="text-xl text-gray-600">
            Développeur Full Stack,
            <br />
            Ingénieur en Système d'Information,
            <br />
            Passionné par la conception et ke développement d'applications.
          </p>
          <div className="flex space-x-4">
            <a
              href="#academic"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Découvrez moi
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Me Contacter
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="/IMG_5530.JPG"
            alt="Profile"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto shadow-lg"
          />
        </div>
      </div>
      {/* </div> */}
    </Container>
  );
};

export default Hero;
