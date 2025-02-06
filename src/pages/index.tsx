import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ContactCTA from '../components/ContactCTA';
import ExperiencesCTA from '../components/experience/ExperiencesCTA';
import MainHero from '../components/MainHero';
import ProjectsCTA from '../components/project/ProjectsCTA';
import QualificationsCTA from '../components/qualification/QualificationsCTA';
import SkillsCTA from '../components/skill/SkillsCTA';

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
