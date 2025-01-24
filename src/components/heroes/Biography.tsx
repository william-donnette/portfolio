import { FunctionComponent } from "react";
import Container from "../../../src-archive/components/Container";

interface BiographyProps {}

const Biography: FunctionComponent<BiographyProps> = () => {
  const getAge = (date: Date) => {
    const diff = Date.now() - date.getTime();
    const age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  };

  return (
    <Container>
      <div className="flex flex-row gap-20">
        <img
          src="/img/IMG_5530.JPG"
          alt="William Donnette"
          className="rounded-full h-60 aspect-square"
        />
        <div>
          <h1 className="font-bold uppercase text-6xl text-blue-900">
            William Donnette
          </h1>
          <h2 className="font-bold text-4xl text-blue-900">
            Développeur Full Stack
          </h2>
          <p className="mt-10 text-gray-600">
            Agé de {getAge(new Date(2001, 4, 17))} ans, je suis passionné par le
            développement d’applications. <br />
            Depuis 2021, je me suis orienté vers les technologies Web.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Biography;
