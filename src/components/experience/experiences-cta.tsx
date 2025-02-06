// import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import {FunctionComponent} from 'react';
import Container from '../common/container';
import InfiniteHorizontalScroll from '../common/infinite-horizontal-scroll';
import experiences from './experiences.mock';

interface ExperiencesCTAProps {}

const ExperiencesCTA: FunctionComponent<ExperiencesCTAProps> = () => {
	return (
		<Container id="experiences" className="text-center">
			<div className="max-w-4xl mx-auto mb-10">
				<h2 className="text-3xl font-bold text-gray-900 dark:text-white">Expériences professionnelles</h2>
			</div>
			<InfiniteHorizontalScroll items={experiences}>
				{(experience) => (
					<li key={experience.name}>
						<a href={`/docs/experiences/${experience.name}`}>
							<img className={experience.className} src={experience.image} alt={experience.name} />
						</a>
					</li>
				)}
			</InfiniteHorizontalScroll>
		</Container>
	);
};

export default ExperiencesCTA;
