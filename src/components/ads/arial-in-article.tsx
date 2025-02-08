import {FunctionComponent} from 'react';

interface ArialInArticleProps {}

const ArialInArticle: FunctionComponent<ArialInArticleProps> = () => {
	return (
		<>
			<ins
				className="adsbygoogle block text-center"
				data-ad-layout="in-article"
				data-ad-format="fluid"
				data-ad-client="ca-pub-7732822326275292"
				data-ad-slot="5480911059"
			></ins>
			<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
		</>
	);
};

export default ArialInArticle;
