import {Project} from './type';

const projects: Array<Project> = [
	{
		id: 'homkizz',
		title: "🏠 Hom'Kizz",
		status: 'wip',
		type: 'personnel',
		description: "Solutions digitales pour le secteur de l'immobilier avec Next.js, React et Machine Learning pour l'estimation immobilière.",
		image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
		technologies: ['Next.js', 'React', 'Docker', 'TailwindCSS', 'Machine Learning', 'PostgreSQL'],
		links: {
			website: 'https://homkizz.com/fr-FR',
			doc: '/docs/projects/homkizz',
		},
	},
	{
		id: 'etl-sncf',
		title: '🚂 ETL SNCF',
		status: 'active',
		type: 'professionnel',
		description: "Développement d'un ETL pour la transformation des données ferroviaires.",
		image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80',
		technologies: ['Node.js', 'TypeScript', 'PostgreSQL'],
		links: {
			doc: '/docs/experiences/sncf',
		},
	},
	{
		id: 'theses',
		title: '📚 Theses.fr',
		status: 'active',
		type: 'professionnel',
		description: 'Maintenance et évolution de la plateforme nationale de référencement des thèses.',
		image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
		technologies: ['Vue.js', 'Java Spring', 'PostgreSQL'],
		links: {
			website: 'https://theses.fr',
			doc: '/docs/experiences/abes',
		},
	},
	{
		id: 'app-mobile-ar',
		title: '📱 Réalité Augmentée',
		status: 'archived',
		type: 'scolaire',
		description: "Développement d'une application mobile avec React Native et APIs en C# intégrant la réalité augmentée.",
		image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		technologies: ['React Native', 'Expo', 'C#', 'Keycloak'],
		links: {
			doc: '/docs/academic/master-eisi/projects#-développement-dune-application-mobile',
		},
	},
	{
		id: 'wallet',
		title: '👛 Wallet',
		status: 'wip',
		type: 'personnel',
		description: 'Application mobile de suivi de patrimoine financier développée avec React Native et Expo.',
		image: 'https://images.unsplash.com/photo-1459257831348-f0cdd359235f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		technologies: ['React Native', 'Expo', 'Node.js', 'TypeScript'],
		links: {
			doc: '/docs/projects/wallet',
		},
	},
	{
		id: 'ia-mspr',
		title: '🤖 IA Élections',
		status: 'archived',
		type: 'scolaire',
		description: 'Développement de modèles de Machine Learning pour la prédiction électorale.',
		image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		technologies: ['Python', 'TensorFlow', 'Pandas', 'Flask'],
		links: {
			doc: '/docs/academic/master-eisi/projects#-développement-de-modèles-dia',
		},
	},
];

export default projects;
