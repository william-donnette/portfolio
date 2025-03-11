import {FunctionComponent, useEffect} from 'react';

interface HorizontalDisplayProps {}

const HorizontalDisplay: FunctionComponent<HorizontalDisplayProps> = () => {
	useEffect(() => {
		const adsbygoogle = (window as any).adsbygoogle ?? [];
		adsbygoogle.push({});
	});

	return (
		<ins
			className="adsbygoogle block"
			data-ad-client="ca-pub-7732822326275292"
			data-ad-slot="7927073004"
			data-ad-format="auto"
			data-full-width-responsive="true"
		></ins>
	);
};

export default HorizontalDisplay;
