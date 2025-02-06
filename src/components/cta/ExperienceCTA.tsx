// import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import {FunctionComponent} from 'react';
import Container from '../common/Container';

type Experience = {
	name: string;
	image: string;
	className: string;
};

const experiences: Array<Experience> = [
	{
		name: 'abes',
		image: '/img/abes.png',
		className: 'h-40 mx-5',
	},
	{
		name: 'sncf',
		image: '/img/sncf.png',
		className: 'h-20 mx-5',
	},
	{
		name: 'domdata',
		image: '/img/domdata.webp',
		className: 'h-10 mx-5',
	},
	{
		name: 'a3cdigital',
		image: '/img/a3cdigital.webp',
		className: 'h-14 mx-5',
	},
];

interface ExperiencesCTAProps {}

const ExperiencesCTA: FunctionComponent<ExperiencesCTAProps> = () => {
	return (
		<Container id="experiences" className="text-center">
			<div className="max-w-4xl mx-auto mb-10">
				<h2 className="text-3xl font-bold text-gray-900 dark:text-white">Expériences professionnelles</h2>
			</div>
			<div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
				{[1, 2].map((key) => {
					return (
						<ul
							key={key}
							className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll list-none"
						>
							{experiences.map((exp) => {
								return (
									<li key={exp.name}>
										<a href={`/docs/experiences/${exp.name}`}>
											<img className={exp.className} src={exp.image} alt={exp.name} />
										</a>
									</li>
								);
							})}
						</ul>
					);
				})}
			</div>
		</Container>
	);
};

export default ExperiencesCTA;
