import {FunctionComponent} from 'react';
import Button from '../common/button';
import Container from '../common/container';
import SkillCard from './skill-card';
import skills from './skills.mock';

interface SkillsCTAProps {}

const SkillsCTA: FunctionComponent<SkillsCTAProps> = () => {
	return (
		<Container id="skills" className="text-center md:dark:bg-gray-800">
			<div className="max-w-8xl mx-auto">
				<h2 className="text-3xl font-bold text-gray-900 dark:text-white">Mes Compétences</h2>
				<p className="mt-4 text-gray-600 dark:text-gray-300">
					Spécialisé en développement web FullStack, mes compétences sont très variées. J'utilise principalement des technologies modernes
					afin d'offrir la meilleure expérience lors de la conception de mes applications.
				</p>
				<div className="mt-6 flex flex-wrap justify-center gap-6">
					{skills.map((skill, index) => (
						<SkillCard key={index} skill={skill} />
					))}
				</div>
				<div className="mt-8">
					<Button href="/docs/skills" variant="primary">
						Voir +
					</Button>
				</div>
			</div>
		</Container>
	);
};

export default SkillsCTA;
