import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Me from './Me';
import Experience from './Experience/index';

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
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('md'));

	const handleChange = (_, newValue) => setValue(newValue);

	return (
		<div className={classes.root} style={{ flexDirection: matches ? 'row' : 'column' }}>
			<div className={classes.leftContainer}>
				<Paper className={`${classes.highlightBorder}`}>
					<Tabs
						orientation={matches ? 'vertical' : 'horizontal'}
						value={value}
						onChange={handleChange}
						aria-label='simple tabs'
					>
						<Tab label='Home' {...a11yProps(0)} />
						<Tab label='Experience' {...a11yProps(1)} />
						<Tab label='Project' {...a11yProps(2)} />
						<Tab
							label='Resume'
							{...a11yProps(0)}
							onClick={() =>
								window.open(
									'https://docs.google.com/document/d/1Qtf19ZW47kYCcm06HFqylTafhlyXRyVCyDHD5wHeUck/preview',
									'_blank'
								)
							}
						/>
					</Tabs>
				</Paper>
			</div>

			<div className={classes.rightContainer}>
				<TabPanel value={value} index={0}>
					<Me />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Experience />
				</TabPanel>
				<TabPanel value={value} index={2}>
					Item Three
				</TabPanel>
			</div>
		</div>
	);
};

export default Home;
