import {FunctionComponent, useEffect} from 'react';

interface ArialMultiplexProps {}

const ArialMultiplex: FunctionComponent<ArialMultiplexProps> = () => {
	useEffect(() => {
		const adsbygoogle = (window as any).adsbygoogle ?? [];
		adsbygoogle.push({});
	});

	return <ins className="adsbygoogle block" data-ad-format="autorelaxed" data-ad-client="ca-pub-7732822326275292" data-ad-slot="7212757136"></ins>;
};

export default ArialMultiplex;
