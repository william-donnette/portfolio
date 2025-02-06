import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AcademicCTA from '../components/cta/AcademicCTA';
import ContactForm from '../components/cta/ContactCTA';
import Experience from '../components/cta/ExperienceCTA';
import Projects from '../components/cta/ProjectsCTA';
import SkillsCTA from '../components/cta/SkillsCTA';
import MainHero from '../components/hero/MainHero';

export default function Home(): JSX.Element {
	const {siteConfig} = useDocusaurusContext();
	return (
		<Layout title="Portfolio" description={siteConfig.tagline}>
			<main className="flex flex-col w-full max-w-6xl mx-auto px-4">
				<MainHero />
				<SkillsCTA />
				<Experience />
				<Projects />
				<AcademicCTA />
				<ContactForm />
			</main>
		</Layout>
	);
}
