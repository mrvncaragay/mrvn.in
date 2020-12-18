import { useState, useEffect } from 'react';
import { debounce } from 'lodash/fp';

function getWindowDimensions() {
	const { scrollHeight } = document.body;
	const { innerWidth: width, innerHeight: height } = window;

	return {
		height: scrollHeight ? scrollHeight : height,
		width,
	};
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState({ height: 0, width: 0 });

	useEffect(() => {
		setWindowDimensions(getWindowDimensions());
	}, []);

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
