export type Project = {
	id: string;
	title: string;
	status: 'active' | 'wip' | 'archived';
	type: 'personnel' | 'scolaire' | 'professionnel';
	description: string;
	image: string;
	technologies: string[];
	links: {
		website?: string;
		doc: string;
	};
};
