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
		color: '#006233',
	},

	media: {
		height: 0,
		paddingTop: '65%',
		backgroundSize: 'contain',
		backgroundPosition: 'top',
	},
}));

const Himm = ({ panel, expanded, handleChange }) => {
	const classes = useStyles();

	return (
		<Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header'>
				<Typography variant='h4' component='h4' className={classes.heading}>
					Himm
				</Typography>
				<Typography variant='subtitle1' component='p' style={{ display: 'content', color: '#FFFFFF8C' }}>
					(Service Architecture Design)
				</Typography>
			</AccordionSummary>

			<AccordionDetails style={{ flexDirection: 'column' }}>
				<Grid container spacing={3}>
					<Grid item sm={12} style={{ color: '#FFFFFF8C', fontWeight: 'lighter' }}>
						<Typography paragraph style={{ color: '#FFFFFF8C' }}>
							The task of our group is to build the UI of Property Reservation System (PRS) using Service Oriented
							Architecture (SOA) and deploy all services using Dockerized containers on AWS EC2 instances. PRS has four
							different components: images, profile, reservation form, and reviews. Each component must have its own
							server and database that renders the component’s UI. All engineers must also implement a proxy server that
							will fetch all the components’ assets and display a coherent user experience.
						</Typography>

						<Typography paragraph variant='subtitle2' style={{ color: '#FFFFFF8C', marginBottom: 0 }}>
							<b style={{ color: '#fff' }}>Problem: </b>
						</Typography>

						<Typography paragraph style={{ color: '#FFFFFF8C' }}>
							Implementing the reservation form service that requires frequent updates to the DOM using plain JavaScript
							is simply complicated. Building the entire PRS into a single service is difficult to maintain because
							multiple components are interacting within the same environment.
						</Typography>

						<Typography paragraph variant='subtitle2' style={{ color: '#FFFFFF8C', marginBottom: 0 }}>
							<b style={{ color: '#fff' }}>Action: </b>
						</Typography>

						<List dense style={{ color: '#FFFFFF8C', padding: 0 }}>
							<ListItemText
								style={{ lineHeight: 1 }}
								primary='&#8226; Implement the reservation form service using React hooks to simplify the composition of components'
							/>

							<ListItemText
								style={{ lineHeight: 1 }}
								primary='&#8226; Leverage Context and useReducer to easily manage the state of the reservation form'
							/>

							<ListItemText
								style={{ lineHeight: 1 }}
								primary="&#8226; The PRS's services were divided into multiple components"
							/>
						</List>

						<Typography paragraph variant='subtitle2' style={{ color: '#FFFFFF8C', marginBottom: 0, marginTop: 16 }}>
							<b style={{ color: '#fff' }}>Accomplishments: </b>
						</Typography>

						<List dense style={{ color: '#FFFFFF8C', padding: 0 }}>
							<ListItemText
								style={{ lineHeight: 1 }}
								primary='&#8226; Implemented React Hooks to simplify the business logic of PRS and Context with useReducer to centralize state to improve code reuse and composition of components'
							/>

							<ListItemText
								style={{ lineHeight: 1 }}
								primary='&#8226; Managed the deployment of PRS’s services in Dockerized containers on AWS EC2 instances'
							/>

							<ListItemText
								style={{ lineHeight: 1 }}
								primary='&#8226; Led daily scrum meetings and managed project goals on Trello ticketing system to ensure 100% completion of sprint goals'
							/>

							<ListItemText
								style={{ lineHeight: 1 }}
								primary='&#8226; Helped team deploy services to EC2 and Docker to meet deliverables and successfully delivered a fully functioning PRS system'
							/>
						</List>

						<Typography paragraph variant='subtitle2' style={{ color: '#FFFFFF8C', marginTop: 16 }}>
							<b style={{ color: '#fff' }}>Technologies:</b> React (hooks), Node, Express, HTML/CSS, AWS (EC2), Docker,
							MongoDB, Styled-components
						</Typography>
						<IconButton aria-label='github' style={{ padding: 0 }} href='https://github.com/HIMM-SF' target='_blank'>
							<GitHubIcon />
						</IconButton>
					</Grid>
				</Grid>
			</AccordionDetails>
		</Accordion>
	);
};

export default Himm;
