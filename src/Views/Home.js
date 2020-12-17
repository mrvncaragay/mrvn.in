import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		display: 'flex',
		height: '100vh',
		alignItems: 'center',
		padding: theme.spacing(6),
		boxSizing: 'border-box',
	},
	gridContainer: {
		height: '100vh',
	},

	leftContainer: {
		flex: 3,
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},

	rightContainer: {
		flex: 9,
		padding: theme.spacing(2),
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
			{value === index && <Typography>{children}</Typography>}
		</div>
	);
}

const Home = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('md'));

	const handleChange = (_, newValue) => setValue(newValue);

	return (
		<div className={classes.root} style={{ flexDirection: matches ? 'row' : 'column' }}>
			<div className={classes.leftContainer}>
				<Tabs
					orientation={matches ? 'vertical' : 'horizontal'}
					value={value}
					onChange={handleChange}
					aria-label='simple tabs'
				>
					<Tab label='Home' {...a11yProps(0)} />
					<Tab label='Experience' {...a11yProps(1)} />
					<Tab label='Project' {...a11yProps(2)} />
					<Tab label='Resume' {...a11yProps(3)} />
				</Tabs>
			</div>

			<div className={classes.rightContainer}>
				<TabPanel value={value} index={0}>
					<Button>Overrides CSS</Button>
				</TabPanel>
				<TabPanel value={value} index={1}>
					Item Two
				</TabPanel>
				<TabPanel value={value} index={2}>
					Item Three
				</TabPanel>
			</div>
		</div>
	);
};

export default Home;
