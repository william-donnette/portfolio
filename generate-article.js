import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import {fileURLToPath} from 'url';

function readMarkdownFile(fullPath) {
	return new Promise((resolve, reject) => {
		fs.readFile(fullPath, 'utf8', (err, content) => {
			if (err) {
				reject(err);
			} else {
				resolve(content);
			}
		});
	});
}

function readMarkdownFiles(dir) {
	return new Promise(async (resolve, reject) => {
		let combinedContent = '';
		try {
			const items = await new Promise((resolve, reject) => {
				fs.readdir(dir, {withFileTypes: true}, (err, items) => {
					if (err) {
						reject(err);
					} else {
						resolve(items);
					}
				});
			});
			for (const item of items) {
				const fullPath = path.join(dir, item.name);
				if (item.isDirectory()) {
					combinedContent += await readMarkdownFiles(fullPath);
				} else if (item.isFile() && path.extname(item.name).toLowerCase() === '.md') {
					const content = await readMarkdownFile(fullPath);
					combinedContent += content + '\n\n';
				}
			}
			resolve(combinedContent);
		} catch (err) {
			console.error(`Erreur lors de la lecture du dossier ${dir}:`, err);
			reject(err);
		}
	});
}

export function saveArticleToFile(articleName, content) {
	const directory = path.join(path.dirname(fileURLToPath(import.meta.url)), 'blog', encodeURIComponent(articleName));
	if (!fs.existsSync(directory)) {
		fs.mkdirSync(directory, {recursive: true});
	}
	const filePath = path.join(directory, 'index.mdx');
	fs.writeFileSync(filePath, content);
	console.log(`Article enregistré sous ${filePath}`);
}

export async function generateArticle(messages) {
	const apiKey = 'gS75nCSjLGyPsmjldV4WxYyvHVYSOPdK';
	const apiUrl = 'https://api.mistral.ai/v1/chat/completions';
	try {
		const response = await axios.post(
			apiUrl,
			{
				model: 'mistral-small-latest',
				messages,
			},
			{
				headers: {
					Authorization: `Bearer ${apiKey}`,
					'Content-Type': 'application/json',
				},
			}
		);

		const newMessage = response.data.choices[0].message;
		const content = newMessage.content;
		messages.push(newMessage, {role: 'user', content: "Dis-moi en une phrase le slug de l'article que tu viens de rédiger. Rien de plus."});

		const response2 = await axios.post(
			apiUrl,
			{
				model: 'mistral-small-latest',
				messages,
			},
			{
				headers: {
					Authorization: `Bearer ${apiKey}`,
					'Content-Type': 'application/json',
				},
			}
		);

		const slug = response2.data.choices[0].message.content;
		return {slug, content};
	} catch (error) {
		console.error("Erreur lors de la génération de l'article:", error);
		throw error;
	}
}

function readBlogArticle(indexFilePath, title) {
	return new Promise((resolve, reject) => {
		fs.readFile(indexFilePath, 'utf8', (err, buffer) => {
			if (err) {
				reject(err);
			} else {
				resolve([
					{role: 'user', content: `Parfait ! Rédige-moi un article intitulé ${title}`},
					{role: 'assistant', content: buffer},
				]);
			}
		});
	});
}

async function readBlogArticles(resume) {
	const blogDir = './blog';
	let messages = [
		{
			role: 'user',
			content: resume,
		},
	];
	try {
		const items = await new Promise((resolve, reject) => {
			fs.readdir(blogDir, {withFileTypes: true}, (err, items) => {
				if (err) {
					reject(err);
				} else {
					resolve(items);
				}
			});
		});

		for (const item of items) {
			if (item.isDirectory()) {
				const indexFilePath = path.join(blogDir, item.name, 'index.mdx');
				const article = await readBlogArticle(indexFilePath, item.name);
				messages.push(...article);
			}
		}
		return messages;
	} catch (err) {
		console.error('Erreur lors de la lecture du dossier blog:', err);
		throw err;
	}
}

function normalizeString(str) {
	let normalized = str.toLowerCase();
	normalized = normalized.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	normalized = normalized.replace(/\s+/g, '-');
	normalized = normalized.replace(/[^a-z0-9-]/g, '');
	return normalized;
}

async function main() {
	const args = process.argv;
	const topics = [
		'Technologie, Veille Techno Découverte et analyse des dernières tendances technologiques.',
		"Technologie, Nouvel Outil Présentation d'outils récents pour les développeurs et professionnels de la tech.",
		'FinTech, Innovations Exploration des nouveaux outils et services dans le domaine de la FinTech.',
		"Montpellier, Randonnées Partage d'itinéraires et d'expériences de randonnées autour de Montpellier.",
		'Sport, Activités en Plein Air Conseils et suggestions pour pratiquer des sports en pleine nature.',
		"Événements Tech, Rencontres Couverture des événements technologiques et rencontres professionnelles dans l'Hérault.",
		'Nature, Découvertes Exploration de la biodiversité et des paysages naturels de la région.',
		"Traditions, Fêtes Locales Immersion dans les fêtes et traditions culturelles de l'Hérault.",
		"Finance, Investissements Conseils et analyses sur les opportunités d'investissement dans les startups et entreprises technologiques.",
		"Développement Personnel, Tech Articles sur l'amélioration des compétences techniques et professionnelles dans le domaine de la technologie.",
		'Développement Web, Frameworks Exploration des frameworks modernes pour le développement web, leurs avantages et inconvénients.',
		'Cybersécurité, Bonnes Pratiques Conseils et bonnes pratiques pour sécuriser les applications web et les données sensibles.',
		'DevOps, Outils et Méthodologies Présentation des outils DevOps populaires et des méthodologies pour améliorer le cycle de vie du développement logiciel.',
		"Intelligence Artificielle, Applications Découverte des applications pratiques de l'IA dans divers secteurs, y compris la santé, la finance et l'éducation.",
		"Développement Web, Accessibilité Importance de l'accessibilité dans le développement web et comment la mettre en œuvre.",
		"Cybersécurité, Menaces Émergentes Analyse des nouvelles menaces en cybersécurité et comment s'en protéger.",
		"DevOps, Intégration Continue Guide sur l'intégration continue et le déploiement continu (CI/CD) et ses avantages pour les équipes de développement.",
		"Intelligence Artificielle, Apprentissage Automatique Introduction aux concepts de base de l'apprentissage automatique et comment commencer à les utiliser.",
		"Développement Web, Performances Techniques pour optimiser les performances des sites web et améliorer l'expérience utilisateur.",
		"Cybersécurité, Tests d'Intrusion Introduction aux tests d'intrusion et leur importance pour la sécurité des systèmes informatiques.",
		"DevOps, Conteneurs et Orchestration Exploration des technologies de conteneurs comme Docker et des outils d'orchestration comme Kubernetes.",
		"Intelligence Artificielle, Éthique Discussion sur les implications éthiques de l'IA et comment aborder ces défis.",
		'Développement Web, Progressive Web Apps Guide pour créer des Progressive Web Apps (PWA) et leurs avantages par rapport aux applications natives.',
		"Cybersécurité, Sécurité des Réseaux Présentation des meilleures pratiques pour sécuriser les réseaux d'entreprise.",
		'DevOps, Surveillance et Logging Importance de la surveillance et du logging dans les environnements DevOps et outils populaires pour le faire.',
	];

	const topic = args.length > 2 ? args.slice(2).join(' ') : topics[Math.floor(Math.random() * topics.length)];
	console.log('Topic : ' + topic);

	try {
		const resume = await readMarkdownFiles('docs');
		console.log(resume);
		const messages = await readBlogArticles(resume);
		console.log("Nombre d'exemples préchargés : " + messages.length / 2);

		messages.push({
			role: 'user',
			content: `Parfait ! Maintenant, écris un article de blog pour une application docusaurus en MDX en tant que William Donnette sur le thème : ${topic}. Trouve un sujet pertinent et précis selon ce que tu peux trouver sur mon profil sur le web mais aussi et surtout sur les actualités. L'article doit être écrit à la première personne, comme si c'était moi qui le racontais. Ajoute des hyperliens pertinents vers d'autres articles et sites web. L'article doit être facile à lire et apporter une valeur ajoutée au lecteur. Il doit contenir des emojis pour améliorer son rendu et sa facilité de lecture. Il sera publié sur https://william-donnette.dev/blog. Surtout n'écris aucun commentaire autre que le contenu de l'article. N'encapsule pas le contenu dans des balises mdx même si le format doit être du mdx. Aucune mention au fait que cet article est généré automatiquement, aucune mention pour dire que c'est le début ou la fin de l'article. Ajoute des publicités grâce aux imports React dans du MDX. Sépare une première partie de l'article par un truncate pour marquer la partie résumé. N'hésite pas à mettre quelques images ou intégrer des vidéos Youtube sur des sujets bien précis. Pense bien à mettre les métadonnées afin que l'article soit bien référencé. Vérifie bien que les liens vers des sources externes comme les images, vidéos, site web sont corrects et redirigent bien vers une ressource cohérente. Appuie toi sur mon expérience, mes compétences et mes projets mais sans trop en faire. Il faut surtout que ce soit lié à l'actualité et que le lecteur ressente de l'intérêt à lire l'article.`,
		});

		const {slug, content} = await generateArticle(messages);
		const date = new Date().toISOString().split('T')[0];
		const articleName = `${date}-${normalizeString(slug)}`;
		saveArticleToFile(articleName, content.replaceAll('```mdx', '').replaceAll('```', ''));
		console.log(`Nouvel Article : ${articleName}`);
		console.log(articleName);
		process.exit(0);
	} catch (err) {
		console.error('Erreur dans main:', err);
		process.exit(1);
	}
}

main();
