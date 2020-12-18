import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardMedia from '@material-ui/core/CardMedia';
import cpicker from '../../assets/cpicker.png';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	heading: {
		flex: 1,
		color: '#fff',
		fontWeight: 'bold',
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: '#006233',
	},

	media: {
		height: 0,
		paddingTop: '65%',
		backgroundSize: 'contain',
		backgroundPosition: 'top',
	},
}));

const ColorPicker = ({ panel, expanded, handleChange }) => {
	const classes = useStyles();

	return (
		<Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header'>
				<Typography variant='h4' component='h4' className={classes.heading}>
					Color Picker
				</Typography>
				<Link
					href='https://color-picker-3b765.firebaseapp.com/'
					target='_blank'
					style={{ color: '#FFFFFF8C', display: 'contents' }}
				>
					https://color-picker-3b765.firebaseapp.com/
				</Link>
			</AccordionSummary>

			<AccordionDetails style={{ flexDirection: 'column' }}>
				<Grid container spacing={3}>
					<Grid item sm={5}>
						<CardMedia
							className={classes.media}
							image={cpicker}
							title='Spicy Green Book'
							style={{ backgroundSize: 'cover' }}
						/>
					</Grid>

					<Grid item sm={7} style={{ color: '#FFFFFF8C', fontWeight: 'lighter' }}>
						<Typography paragraph style={{ color: '#FFFFFF8C' }}>
							A simple color picker app that allows users to select pre-defined colors or create their own palette and
							save it using local storage.
						</Typography>

						<Typography paragraph variant='subtitle2' style={{ color: '#FFFFFF8C' }}>
							<b style={{ color: '#fff' }}>Technologies:</b> JavaScript, React (hooks), React Native, Firebase, Redux
							(saga, thunk), Stripe, HTML/CSS, Material-ui
						</Typography>
						<IconButton
							aria-label='github'
							style={{ padding: 0 }}
							href='https://github.com/mrvncaragay/color-picker'
							target='_blank'
						>
							<GitHubIcon />
						</IconButton>
					</Grid>
				</Grid>
			</AccordionDetails>
		</Accordion>
	);
};

export default ColorPicker;
