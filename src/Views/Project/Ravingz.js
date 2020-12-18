import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(() => ({
	heading: {
		flex: 1,
		color: '#fff',
		fontWeight: 'bold',
	},
}));

const Ravingz = ({ panel, expanded, handleChange }) => {
	const classes = useStyles();

	return (
		<Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header'>
				<Typography variant='h4' component='h4' className={classes.heading}>
					Ravingz
				</Typography>
				<Typography variant='subtitle1' component='p' style={{ display: 'content', color: '#FFFFFF8C' }}>
					(System Architecture Design)
				</Typography>
			</AccordionSummary>

			<AccordionDetails style={{ flexDirection: 'column' }}>
				<Grid container spacing={3}>
					<Grid item sm={12} style={{ color: '#FFFFFF8C', fontWeight: 'lighter' }}>
						<Typography paragraph style={{ color: '#FFFFFF8C' }}>
							Ravingz is a group of four software engineers and our task was to extend the capabilities of the database
							and server layer to support web scale operation of an existing application called Wonder4. Wonder4 has
							four services, popular dishes, restaurant information, see all photos, and reviews. The service I scaled
							was see all photos. Other services associated with see all photos must be deployed using AWS Ec2 t2.micro
							instance.
						</Typography>

						<Typography paragraph variant='subtitle2' style={{ color: '#FFFFFF8C', marginBottom: 0 }}>
							<b style={{ color: '#fff' }}>Problem: </b>
						</Typography>

						<Typography paragraph style={{ color: '#FFFFFF8C' }}>
							Wonder4's see all photos service was built locally to handle small data sets and a low throughput;
							therefore, it could potentially interrupt user experience or go offline when experiencing high volume of
							requests in a production level.
						</Typography>

						<Typography paragraph variant='subtitle2' style={{ color: '#FFFFFF8C', marginBottom: 0 }}>
							<b style={{ color: '#fff' }}>Action: </b>
						</Typography>

						<List dense style={{ color: '#FFFFFF8C', padding: 0 }}>
							<ListItemText
								style={{ lineHeight: 1 }}
								primary='&#8226; Implemented load balancing technique using nginx to distribute traffic to a multiple servers'
							/>

							<ListItemText
								style={{ lineHeight: 1 }}
								primary='&#8226; Utilized horizontal scaling by adding three additional t2.micro instances of see all photos server'
							/>

							<ListItemText
								style={{ lineHeight: 1 }}
								primary='&#8226; Deployed four Cassandra servers to uniformly distribute data across multiple nodes'
							/>
						</List>

						<Typography paragraph variant='subtitle2' style={{ color: '#FFFFFF8C', marginBottom: 0, marginTop: 16 }}>
							<b style={{ color: '#fff' }}>Accomplishments: </b>
						</Typography>

						<List dense style={{ color: '#FFFFFF8C', padding: 0 }}>
							<ListItemText
								style={{ lineHeight: 1 }}
								primary='&#8226; Scaled/deployed Image service of Restaurant Profile System (RPS) to handle 1000 rps, less than 1% error rate, and low latency on EC2 t2.micro'
							/>

							<ListItemText
								style={{ lineHeight: 1 }}
								primary='&#8226; Deployed and populated 4 Cassandra nodes for high availability and partition tolerance  with 10 million primary and 70 million secondary records for a read-heavy RPS on t2.micros'
							/>

							<ListItemText
								style={{ lineHeight: 1 }}
								primary='&#8226; Performed horizontal scaling with load balancer (Nginx) that resulted in a 300% increase in throughput with 0% error rate, and 61ms avg rps'
							/>
						</List>

						<Typography paragraph variant='subtitle2' style={{ color: '#FFFFFF8C', marginTop: 16 }}>
							<b style={{ color: '#fff' }}>Technologies:</b> JavaScript, React, Node, Express, Nginx, HTML/CSS,
							Cassandra, AWS (EC2, S3), New Relic, Loader.io, Jmeter
						</Typography>
						<IconButton aria-label='github' style={{ padding: 0 }} href='https://github.com/Ravingz' target='_blank'>
							<GitHubIcon />
						</IconButton>
					</Grid>
				</Grid>
			</AccordionDetails>
		</Accordion>
	);
};

export default Ravingz;
