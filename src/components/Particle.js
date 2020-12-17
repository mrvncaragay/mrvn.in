import React from 'react';
import { useStateValue } from '../context';
import Particles from 'react-particles-js';
import useWindowDimensions from '../hooks/useWindowDimensions';

const Particle = () => {
	const [{ darkMode }] = useStateValue();
	const { height, width } = useWindowDimensions();

	return (
		<Particles
			style={{ backgroundColor: darkMode, position: 'absolute' }}
			height={height}
			width={width}
			params={{
				particles: {
					number: {
						value: 60,
						density: {
							enable: true,
							value_area: 1500,
						},
					},
					line_linked: {
						enable: true,
						opacity: 0.03,
					},
					move: {
						speed: 0.3,
					},
					size: {
						value: 1.5,
					},
					opacity: {
						anim: {
							enable: true,
							speed: 1,
							opacity_min: 0.1,
						},
					},
				},
				interactivity: {
					events: {
						onclick: {
							enable: true,
							mode: 'push',
						},
					},
					modes: {
						push: {
							particles_nb: 1,
						},
					},
				},
				retina_detect: true,
			}}
		/>
	);
};

export default Particle;
