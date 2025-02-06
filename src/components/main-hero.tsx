import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {FunctionComponent} from 'react';
import Button from './common/button';
import Container from './common/container';

interface MainHeroProps {}

const MainHero: FunctionComponent<MainHeroProps> = () => {
	const {siteConfig} = useDocusaurusContext();

	return (
		<Container id="home" className="mt-20">
			{/* <div className="container mx-auto px-4"> */}
			<div className="flex flex-col-reverse gap-10 lg:flex-row items-center justify-between">
				<div className="flex-1 space-y-6">
					<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white lg:max-w-lg">
						Hey, Je suis <span className="text-blue-600">William Donnette</span>
					</h1>
					<p className="text-xl text-gray-600 dark:text-gray-300">
						Développeur Full Stack,
						<br />
						Ingénieur en Système d'Information,
						<br />
						Passionné par la conception et le développement d'applications.
					</p>
					<div className="flex space-x-4">
						<Button href="/docs/intro" variant="primary">
							Découvrez moi
							{/* <ArrowRight className="ml-2" size={20} /> */}
						</Button>
						<Button href="#contact" variant="secondary">
							Me Contacter
						</Button>
					</div>
				</div>
				<img
					src={siteConfig.themeConfig.image as string}
					alt={siteConfig.title}
					className="rounded-full w-40 h-40 lg:w-80 lg:h-80 object-cover mx-auto shadow-lg"
				/>
			</div>
			{/* </div> */}
		</Container>
	);
};

export default MainHero;
