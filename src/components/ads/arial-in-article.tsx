import {FunctionComponent, useEffect} from 'react';

interface ArialInArticleProps {}

const ArialInArticle: FunctionComponent<ArialInArticleProps> = () => {
	useEffect(() => {
		const adsbygoogle = (window as any).adsbygoogle ?? [];
		adsbygoogle.push({});
	});

	return (
		<ins
			className="adsbygoogle block text-center"
			data-ad-layout="in-article"
			data-ad-format="fluid"
			data-ad-client="ca-pub-7732822326275292"
			data-ad-slot="5480911059"
		></ins>
	);
};

export default ArialInArticle;
