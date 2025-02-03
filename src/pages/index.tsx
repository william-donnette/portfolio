import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AcademicCTA from '../components/Academic';
import ContactForm from '../components/Contact';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import SkillsCTA from '../components/Skills';

export default function Home(): JSX.Element {
	const {siteConfig} = useDocusaurusContext();
	return (
		<Layout title="Portfolio" description={siteConfig.tagline}>
			<main className="flex flex-col w-full max-w-6xl mx-auto px-4">
				<Hero />
				<SkillsCTA />
				<Experience />
				<Projects />
				<AcademicCTA />
				<ContactForm />
			</main>
		</Layout>
	);
}
