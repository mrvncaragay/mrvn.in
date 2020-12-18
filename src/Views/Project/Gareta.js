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
import gareta from '../../assets/gareta.png';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
	heading: {
		flex: 1,
		color: '#fff',
		fontWeight: 'bold',
	},

	media: {
		height: 0,
		paddingTop: '65%',
		backgroundSize: 'contain',
		backgroundPosition: 'top',
	},
}));

const Gareta = ({ panel, expanded, handleChange }) => {
	const classes = useStyles();

	return (
		<Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header'>
				<Typography variant='h4' component='h4' className={classes.heading}>
					Gareta
				</Typography>
				<Link
					href='https://gareta-e4fdd.firebaseapp.com/'
					target='_blank'
					style={{ color: '#FFFFFF8C', display: 'contents' }}
				>
					https://gareta-e4fdd.firebaseapp.com/
				</Link>
			</AccordionSummary>

			<AccordionDetails style={{ flexDirection: 'column' }}>
				<Grid container spacing={3}>
					<Grid item sm={5}>
						<CardMedia
							className={classes.media}
							image={gareta}
							title='Spicy Green Book'
							style={{ backgroundSize: 'cover' }}
						/>
					</Grid>

					<Grid item sm={7} style={{ color: '#FFFFFF8C', fontWeight: 'lighter' }}>
						<Typography paragraph style={{ color: '#FFFFFF8C' }}>
							A e-commerce built for the web and mobile platform. It allows users to browser latest style, add items to
							their cart, and checkout.
						</Typography>

						<Typography paragraph variant='subtitle2' style={{ color: '#FFFFFF8C', marginBottom: 0 }}>
							<b style={{ color: '#fff' }}>Accomplishments: </b>
						</Typography>

						<List dense style={{ color: '#FFFFFF8C', padding: 0 }}>
							<ListItemText
								style={{ lineHeight: 1 }}
								primary='&#8226; Learned how to implement reusable components using react hooks and integrate with Firebase API as data storage'
							/>

							<ListItemText
								style={{ lineHeight: 1 }}
								primary='&#8226; Utilized Redux (saga, thunk) to easily maintain state'
							/>
						</List>

						<Typography paragraph variant='subtitle2' style={{ color: '#FFFFFF8C' }}>
							<b style={{ color: '#fff' }}>Technologies:</b> JavaScript, React (hooks), React Native, Firebase, Redux
							(saga, thunk), Stripe, HTML/CSS, Material-ui
						</Typography>
						<IconButton
							aria-label='github'
							style={{ padding: 0 }}
							href='https://github.com/mrvncaragay/Gareta'
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

export default Gareta;
