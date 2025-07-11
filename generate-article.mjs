import 'dotenv/config';
import * as fs from 'fs';
import OpenAI from 'openai';
import * as path from 'path';
import {fileURLToPath} from 'url';

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

async function readMarkdownFile(fullPath) {
	return fs.promises.readFile(fullPath, 'utf8');
}

async function readMarkdownFiles(dir) {
	let combined = '';
	const items = await fs.promises.readdir(dir, {withFileTypes: true});
	for (const item of items) {
		const full = path.join(dir, item.name);
		if (item.isDirectory()) {
			combined += await readMarkdownFiles(full);
		} else if (item.isFile() && path.extname(item.name).toLowerCase() === '.md') {
			combined += (await readMarkdownFile(full)) + '\n\n';
		}
	}
	return combined;
}

export function saveArticleToFile(articleName, content) {
	const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'blog', encodeURIComponent(articleName));
	fs.mkdirSync(dir, {recursive: true});
	fs.writeFileSync(path.join(dir, 'index.mdx'), content);
}

function extractSlug(mdxContent) {
	const frontmatterMatch = mdxContent.match(/^---\n([\s\S]*?)\n---/);
	if (!frontmatterMatch) return null;

	const frontmatterLines = frontmatterMatch[1].split('\n');
	for (const line of frontmatterLines) {
		const match = line.match(/^slug:\s*(.+)$/);
		if (match) {
			return match[1].trim();
		}
	}

	return null;
}

async function generateArticle(messages) {
	// Appel unique avec système + instructions + conversation
	const response = await openai.responses.create({
		model: 'gpt-4.1',
		input: messages,
	});

	console.log(response.output_text);
	// Le contenu généré
	const content = response.output_text;

	const slug = extractSlug(content);

	if (!slug) {
		throw new Error('No slug in gereated content');
	}

	return {slug, content};
}

async function readBlogArticle(indexFilePath) {
	const buffer = await fs.promises.readFile(indexFilePath, 'utf8');
	return buffer;
}

async function readRandomBlogArticle() {
	const blogDir = './blog';
	const items = await fs.promises.readdir(blogDir, {withFileTypes: true});

	const item = items.filter((item) => item.isDirectory())[Math.floor(Math.random() * items.length)];

	const indexPath = path.join(blogDir, item.name, 'index.mdx');
	const article = await readBlogArticle(indexPath);

	return article;
}

function normalizeString(str) {
	return str
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/\s+/g, '-')
		.replace(/[^a-z0-9-]/g, '');
}

async function main() {
	const args = process.argv.slice(2);
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
	const topic = args.length ? args.join(' ') : topics[Math.floor(Math.random() * topics.length)];
	console.log('Topic :', topic);

	// const resume = await readMarkdownFiles('docs');
	const contextPrompt =
		"Tu es un assistant rédactionnel spécialisé en SEO pour William Donnette, développeur fullstack passionné par les nouvelles technologies, spécialisé en TypeScript (React, Next.js, Node.js), Docker, CI/CD, Java, PHP et Python. Il a travaillé sur des projets variés, notamment chez ABES, SNCF, DomData et A3CDigital.\n\nObjectif :\nGénérer un article de blog au format MDX destiné au site https://william-donnette.dev/blog. L'article doit être :\n";
	const objectifs = [
		"Écrit à la première personne (comme si c'était William qui parle).",
		"Basé sur des faits vérifiables dans son parcours, ses projets, ses compétences ou l'actualité tech.",
		'Facile à lire, structuré, pertinent, jamais redondant avec des contenus existants.',
		'Enrichi de liens externes utiles (sites officiels, documentations, vidéos YouTube...).',
		'Accompagné de visuels (images, emojis, vidéos intégrées).',
		"Intégrant des publicités natives via composants React :\n\n```mdx\nimport HorizontalDisplay from '@site/src/components/ads/horizontal-display';\nimport ArialInArticle from '@site/src/components/ads/arial-in-article';\nimport ArialMultiplex from '@site/src/components/ads/arial-multiplex';\n```\n\nContraintes de rendu :\n\nLe fichier doit être écrit uniquement en MDX sans bloc de commentaires.",
		'Ajouter un bloc de métadonnées en haut avec : title, slug, description, image, tags, authors, keywords, date.',
		"Inclure une balise <!--truncate--> après quelques lignes d'introduction pour gérer le résumé.",
		'Ne jamais mentionner que le texte a été généré automatiquement.',
		'Ne pas encapsuler le contenu global dans une balise MDX.',
		"Ne pas surjouer les liens avec le parcours : s'ils sont naturels, ils doivent être subtilement intégrés.",
		'Ne vends pas à suivre les réseauc sociaux',
		"Essaye de pousser l'utilisateur à aller sur un autre article de https://william-donnette.dev/blog",
	];

	const prompt = `Rédige un article sur {{TOPIC}}`;

	const article = await readRandomBlogArticle();

	const systemPrompt = contextPrompt + objectifs.join('\n') + "\n\nVoici un exemple d'article :\n\n" + article;

	const messages = [
		{role: 'system', content: systemPrompt},
		{role: 'user', content: prompt.replace('{{TOPIC}}', topic)},
	];

	const {slug, content} = await generateArticle(messages);
	const date = new Date().toISOString().split('T')[0];
	const articleName = `${date}-${normalizeString(slug)}`;
	saveArticleToFile(articleName, content);
	console.log('Nouvel article:', articleName);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
