import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Ravingz from './Ravingz';
import Himm from './Himm';
import Gareta from './Gareta';
import ColorPicker from './ColorPicker';

const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
	},
}));

const Project = () => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(null);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div className={classes.root}>
			<Ravingz expanded={expanded} handleChange={handleChange} panel='panel1' />
			<Himm expanded={expanded} handleChange={handleChange} panel='panel2' />
			<Gareta expanded={expanded} handleChange={handleChange} panel='panel3' />
			<ColorPicker expanded={expanded} handleChange={handleChange} panel='panel4' />
		</div>
	);
};

export default Project;
