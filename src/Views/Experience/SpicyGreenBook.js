import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import ListItemText from '@material-ui/core/ListItemText';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardMedia from '@material-ui/core/CardMedia';
import sgb from '../../assets/sgb.png';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	heading: {
		flex: 1,
		color: '#006233',
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

const Experience = ({ expanded, handleChange }) => {
	const classes = useStyles();

	return (
		<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header'>
				<Typography variant='h4' component='h4' className={classes.heading}>
					Spicy Green Book
				</Typography>
				<Link href='https://spicygreenbook.org' target='_blank' style={{ color: '#006233', display: 'contents' }}>
					spicygreenbook.org
				</Link>
			</AccordionSummary>

			<AccordionDetails style={{ flexDirection: 'column' }}>
				<Grid container spacing={3}>
					<Grid item sm={5}>
						<CardMedia className={classes.media} image={sgb} title='Spicy Green Book' />
					</Grid>

					<Grid item sm={7} style={{ color: '#FFFFFF8C', fontWeight: 'lighter' }}>
						<Typography paragraph style={{ color: '#FFFFFF8C' }}>
							Spicy Green Book is a non-profit organization that brings Black-owned businesses together and create space
							where business owners and loyal customers can come together to support their local community.
						</Typography>

						<Typography paragraph variant='subtitle2' style={{ color: '#FFFFFF8C', marginBottom: 0, lineHeight: 0 }}>
							<b style={{ color: '#fff' }}>Accomplishments: </b>
						</Typography>

						<List dense style={{ color: '#FFFFFF8C', padding: 0 }}>
							<ListItem>
								<ListItemText primary='&#8226; Improved overall performance by 13%, refactoring and preventing unnecessary rerenders of react components' />
							</ListItem>

							<ListItem>
								<ListItemText primary='&#8226; Implemented a navigation system to enhance user experience on native platforms' />
							</ListItem>

							<ListItem>
								<ListItemText primary='&#8226; Maintained/Resolved application bugs and ensure compatibility on both web and native environments' />
							</ListItem>

							<ListItem>
								<ListItemText
									primary='&#8226; Collaborated with the head of engineering, founder, and other engineers to produce creative and
					efficient solutions'
								/>
							</ListItem>
						</List>

						<Typography paragraph variant='subtitle2' style={{ color: '#FFFFFF8C' }}>
							<b style={{ color: '#fff' }}>Technologies:</b> JavaScript, React (hooks), React Native, Nextjs, Vercel,
							Git
						</Typography>
					</Grid>
				</Grid>
			</AccordionDetails>
		</Accordion>
	);
};

export default Experience;
