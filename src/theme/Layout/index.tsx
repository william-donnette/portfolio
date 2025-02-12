import Head from '@docusaurus/Head';
import {useLocation} from '@docusaurus/router';
import Layout from '@theme-original/Layout';

export default function LayoutWrapper(props) {
	const location = useLocation();

	return (
		<>
			{location.pathname.startsWith('/blog') && (
				<Head>
					<meta name="google-adsense-account" content="ca-pub-7732822326275292" />
					<script
						async
						src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7732822326275292"
						crossOrigin="anonymous"
					></script>
				</Head>
			)}
			<Layout {...props} />
		</>
	);
}
