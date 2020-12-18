import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpicyGreenBook from './SpicyGreenBook';

const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
	},
}));

const Experience = () => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState('panel1');

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div className={classes.root}>
			<SpicyGreenBook expanded={expanded} handleChange={handleChange} panel='panel1' />
		</div>
	);
};

export default Experience;
