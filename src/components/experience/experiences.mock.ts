export type Experience = {
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

export default experiences;
