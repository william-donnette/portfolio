import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ContactCTA from '../components/contact-cta';
import ExperiencesCTA from '../components/experience/experiences-cta';
import MainHero from '../components/main-hero';
import ProjectsCTA from '../components/project/projects-cta';
import QualificationsCTA from '../components/qualification/qualifications-cta';
import SkillsCTA from '../components/skill/skills-cta';

export default function Home(): JSX.Element {
	const {siteConfig} = useDocusaurusContext();
	return (
		<Layout title="Portfolio" description={siteConfig.tagline}>
			<main className="flex flex-col w-full max-w-6xl mx-auto px-4">
				<MainHero />
				<SkillsCTA />
				<ExperiencesCTA />
				<ProjectsCTA />
				<QualificationsCTA />
				<ContactCTA />
			</main>
		</Layout>
	);
}
