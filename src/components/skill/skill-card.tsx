import {FunctionComponent} from 'react';
import {Skill} from './type';

interface SkillCardProps {
	skill: Skill;
}

const SkillCard: FunctionComponent<SkillCardProps> = ({skill}) => {
	return (
		<a
			href={skill.link}
			target="_blank"
			rel="noopener noreferrer"
			className="flex flex-col items-center gap-2 hover:scale-105 hover:no-underline"
		>
			<div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md">
				<img src={skill.icon} alt={skill.name} className="w-10 h-10" />
			</div>
			<span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
		</a>
	);
};

export default SkillCard;
