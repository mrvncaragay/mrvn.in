import { useState, useEffect } from 'react';
import { debounce } from 'lodash/fp';

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		const fn = debounce(300, handleResize);
		window.addEventListener('resize', fn);
		return () => window.removeEventListener('resize', fn);
	}, []);

	return windowDimensions;
}
