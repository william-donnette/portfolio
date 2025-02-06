import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {FunctionComponent} from 'react';
import ContactCTA from '../components/contact-cta';
import ExperiencesCTA from '../components/experience/experiences-cta';
import MainHero from '../components/main-hero';
import ProjectsCTA from '../components/project/projects-cta';
import QualificationsCTA from '../components/qualification/qualifications-cta';
import SkillsCTA from '../components/skill/skills-cta';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
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
};

export default Home;
