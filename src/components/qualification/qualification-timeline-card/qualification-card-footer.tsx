import {FunctionComponent} from 'react';
import Button from '../../common/button2';
import {Qualification} from '../type';

interface QualificationCardFooterProps {
	qualification: Qualification;
}

const QualificationCardFooter: FunctionComponent<QualificationCardFooterProps> = ({qualification}) => {
	return (
		<div className="flex flex-wrap gap-4">
			<Button variant="primary" href={qualification.link}>
				En savoir +
			</Button>
			<Button variant="secondary" href={qualification.link + '/projects'}>
				Découvrir les projets réalisés
			</Button>
		</div>
	);
};

export default QualificationCardFooter;
