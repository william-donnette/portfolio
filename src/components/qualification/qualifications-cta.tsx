import {FunctionComponent} from 'react';
import Button from '../common/button2';
import Container from '../common/container2';
import QualificationTimelineCard from './qualification-timeline-card';
import qualifications from './qualifications.mock';

interface QualificationsCTAProps {}

const QualificationsCTA: FunctionComponent<QualificationsCTAProps> = () => {
	return (
		<Container id="academic" className="text-center">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-gray-900 dark:text-white">Mon Parcours Académique</h2>
				<p className="mt-4 text-gray-600 dark:text-gray-300">
					Au fur et à mesure du temps, j'ai affiné mon parcours afin de réaliser des formations qui m'attiraient. Elles m'ont apportées à la
					fois les connaissances nécessaires tout en mettant l'accent sur la pratique.
				</p>
			</div>
			<div className="max-w-8xl mx-auto space-y-8">
				{qualifications.map((qualification, index) => (
					<QualificationTimelineCard key={index} qualification={qualification} />
				))}
				<div className="mt-8">
					<Button href="/docs/academic/master-eisi" variant="primary">
						Voir +
					</Button>
				</div>
			</div>
		</Container>
	);
};

export default QualificationsCTA;
