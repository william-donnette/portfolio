import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Academic from '../components/Academic';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home(): JSX.Element {
	const {siteConfig} = useDocusaurusContext();
	return (
		<Layout title="Portfolio" description={siteConfig.tagline}>
			{/* <HomepageHeader /> */}
			<main className="flex flex-col w-full max-w-6xl mx-auto">
				<Hero />
				<Academic />
				<Experience />
				<Skills />
				<Projects />
				<Contact />
				{/* <HomepageFeatures /> */}
			</main>
		</Layout>
	);
}
