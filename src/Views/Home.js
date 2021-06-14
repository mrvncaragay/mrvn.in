import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Me from './Me';
import Experience from './Experience';
import Project from './Project';
import Resume from './Resume';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		padding: theme.spacing(6),
		height: '100vh',
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(1),
		},
	},

	highlightBorder: {
		transition: 'border 0.5s',
		border: '1px solid #24272c',
		'&:hover': {
			border: '1px solid #9e9e9e',
		},
	},
}));

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && children}
		</div>
	);
}

const Home = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (_, newValue) => setValue(newValue);

	return (
		<Grid className={classes.root}>
			<Grid item sm={12}>
				<Paper className={`${classes.highlightBorder}`}>
					<Tabs orientation={'horizontal'} value={value} onChange={handleChange} aria-label='menu tabs'>
						<Tab label='Home' {...a11yProps(0)} style={{ textTransform: 'capitalize' }} />
						<Tab label='Experience' {...a11yProps(1)} style={{ textTransform: 'capitalize' }} />
						<Tab label='Project' {...a11yProps(2)} style={{ textTransform: 'capitalize' }} />
						<Tab label='Resume' {...a11yProps(0)} style={{ textTransform: 'capitalize' }} />
					</Tabs>
				</Paper>
			</Grid>

			<Grid item sm={12}>
				<TabPanel value={value} index={0}>
					<Me />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Experience />
				</TabPanel>
				<TabPanel value={value} index={2}>
					<Project />
				</TabPanel>
				<TabPanel value={value} index={3}>
					<Resume />
				</TabPanel>
			</Grid>
		</Grid>
	);
};

export default Home;
