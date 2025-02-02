import type * as Preset from '@docusaurus/preset-classic';
import type {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';
import tailwindPlugin from './plugins/tailwind-config.cjs';

const config: Config = {
	title: 'William Donnette',
	tagline: "Développeur Full Stack, Ingénieur en Système d'Information, Passionné par la conception et le développement d'applications.",
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://william-donnette.blog',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'william-donnette', // Usually your GitHub org/user name.
	projectName: 'portfolio', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'fr',
		locales: ['fr'],
	},

	plugins: [tailwindPlugin],

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl: 'https://gitlab.com/william-donnette/portfolio/-/tree/main/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
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
		image: 'img/IMG_5530.JPG',
		navbar: {
			title: 'William Donnette',
			logo: {
				alt: 'William Donnette',
				src: 'img/IMG_5530.JPG',
				className: 'rounded-full',
			},
			items: [
				{to: '/docs/intro', label: 'Portfolio', position: 'left'},
				{to: '/docs/projects/homkizz', label: 'Mes Projets', position: 'left'},
				{to: '/blog', label: 'Blog', position: 'left'},
				{
					type: 'search',
					position: 'right',
				},
				{
					href: 'https://gitlab.com/william-donnette',
					label: 'GitLab',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Portfolio',
					items: [
						{
							label: '👋 Qui suis-je ?',
							to: '/docs/intro',
						},
						{
							label: '🎓 Formation Académique',
							to: '/docs/academic/master-eisi/',
						},
						{
							label: '💼 Expériences Professionnelles',
							to: '/docs/experiences/abes/',
						},
						{
							label: '💡 Mes Compétences',
							to: '/docs/skills',
						},
						{
							label: '🚧 Projets Personnels',
							to: '/docs/category/-projets-personnels',
						},
					],
				},
				{
					title: 'Community',
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
					title: 'More',
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
			copyright: `Copyright © ${new Date().getFullYear()} William Donnette. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
		algolia: {
			appId: '0CMHNGVUX0',
			apiKey: 'fb8a8bf7f10a789e5c28ae7be4f70512',
			indexName: 'test_index',
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
