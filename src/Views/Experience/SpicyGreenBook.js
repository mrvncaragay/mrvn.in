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
import sgb from '../../assets/sgb.png';
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
		color: '#fff',
	},

	media: {
		height: 0,
		paddingTop: '65%',
		backgroundSize: 'contain',
		backgroundPosition: 'top',
	},
}));

const SpicyGreenBook = ({ panel, expanded, handleChange }) => {
	const classes = useStyles();

	return (
		<Accordion square expanded={expanded === panel} onChange={handleChange(panel)}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header'>
				<Typography variant='h4' component='h4' className={classes.heading}>
					Spicy Green Book
				</Typography>
				<Link href='https://spicygreenbook.org' target='_blank' style={{ color: '#FFFFFF8C', display: 'contents' }}>
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

						<Typography paragraph variant='subtitle2' style={{ color: '#FFFFFF8C', marginBottom: 0 }}>
							<b style={{ color: '#fff' }}>Accomplishments: </b>
						</Typography>

						<List dense style={{ color: '#FFFFFF8C', padding: 0 }}>
							<ListItemText
								style={{ lineHeight: 1 }}
								primary='&#8226; Improved overall performance by 13%, refactoring and preventing unnecessary rerenders of react components'
							/>

							<ListItemText
								style={{ lineHeight: 1 }}
								primary='&#8226; Implemented a navigation system to enhance user experience on native platforms'
							/>

							<ListItemText
								style={{ lineHeight: 1 }}
								primary='&#8226; Maintained/Resolved application bugs and ensure compatibility on both web and native environments'
							/>

							<ListItemText
								style={{ lineHeight: 1 }}
								primary='&#8226; Collaborated with the head of engineering, founder, and other engineers to produce creative and
					efficient solutions'
							/>
						</List>

						<Typography paragraph variant='subtitle2' style={{ color: '#FFFFFF8C' }}>
							<b style={{ color: '#fff' }}>Technologies:</b> JavaScript, React (hooks), React Native, Nextjs, Vercel,
							Git
						</Typography>
						<IconButton
							aria-label='github'
							style={{ padding: 0 }}
							href='https://github.com/spicygreenbook/greenbook-app'
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

export default SpicyGreenBook;
