import type * as Preset from '@docusaurus/preset-classic';
import type {Config} from '@docusaurus/types';
import tailwindPlugin from './plugins/tailwind-config.cjs';

const config: Config = {
	title: 'William Donnette',
	tagline: "Développeur Full Stack, Ingénieur en Système d'Information, Passionné par la conception et le développement d'applications.",
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://william-donnette.dev',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'william-donnette', // Usually your GitHub org/user name.
	projectName: 'portfolio', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'throw',
	onBrokenAnchors: 'ignore',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'fr',
		locales: ['fr'],
	},

	plugins: [tailwindPlugin, 'docusaurus-plugin-matomo'],

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					// editUrl: 'https://gitlab.com/william-donnette/portfolio/-/tree/main/',
				},
				blog: {
					showReadingTime: true,
					// editUrl: 'https://gitlab.com/william-donnette/portfolio/-/tree/main/',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: 'img/P1355187.jpg',
		navbar: {
			title: 'William Donnette',
			logo: {
				alt: 'Logo de William Donnette',
				src: 'img/logo.webp',
				className: 'rounded-lg',
				width: 500,
				height: 500,
			},
			items: [
				{to: '/docs/intro', label: 'Curriculum Vitae', position: 'left'},
				{to: '/blog', label: 'Blog', position: 'left'},
				{
					href: '/#contact',
					label: 'Contact',
					position: 'left',
				},
				{
					type: 'search',
					position: 'right',
				},
				{
					href: '/documents/cv-william-donnette.pdf',
					label: 'Télécharger mon CV',
					position: 'right',
					download: true,
					target: '_blank',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Curriculum Vitae',
					items: [
						{
							label: '👋 Qui suis-je ?',
							to: '/docs/intro',
						},
						{
							label: '🎓 Formation Académique',
							to: '/docs/category/-formation-académique',
						},
						{
							label: '💼 Expériences Professionnelles',
							to: '/docs/category/-expériences-professionnelles',
						},
						{
							label: '💡 Mes Compétences',
							to: '/docs/skills',
						},
						{
							label: '💻 Projets Personnels',
							to: '/docs/category/-projets-personnels',
						},
					],
				},
				{
					title: 'Réseaux Sociaux',
					items: [
						{
							label: 'LinkedIn',
							href: 'https://www.linkedin.com/in/william-donnette-a997a4192/',
						},
						{
							label: 'Facebook',
							href: 'https://www.facebook.com/will.donn17',
						},
						{
							label: 'Instagram',
							href: 'https://www.instagram.com/donnwill/',
						},
					],
				},
				{
					title: 'Encore plus...',
					items: [
						{
							label: 'Blog',
							to: '/blog',
						},
						{
							label: 'GitLab',
							href: 'https://gitlab.com/william-donnette',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/william-donnette',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} William Donnette`,
		},
		algolia: {
			appId: 'ZV7NSE3BF9',
			apiKey: '72cbda1599ca44ddbd1b62735d0b54c5',
			indexName: 'portfolio_search',
		},
		matomo: {
			matomoUrl: 'https://analytics.homkizz.com/',
			siteId: '4',
			phpLoader: 'matomo.php',
			jsLoader: 'matomo.js',
		},
	} satisfies Preset.ThemeConfig,
	headTags: [
		{
			tagName: 'meta',
			attributes: {
				name: 'google-adsense-account',
				content: 'ca-pub-7732822326275292',
			},
		},
	],
};

export default config;
