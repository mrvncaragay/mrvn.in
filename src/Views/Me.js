import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import me from '../assets/marv.jpg';

const useStyles = makeStyles((theme) => ({
	media: {
		height: 0,
		paddingTop: '90%',
	},
}));

const Me = () => {
	const classes = useStyles();

	return (
		<Paper>
			<Grid container spacing={3} style={{ padding: 24 }}>
				<Grid item sm={4}>
					<Card>
						<CardMedia className={classes.media} image={me} title='Marvin Caragay' />
					</Card>

					<CardContent style={{ padding: 0, paddingTop: 16, flex: 1 }}>
						<Typography variant='h3' style={{ color: '#fff', fontWeight: 'bold' }}>
							Hello,
						</Typography>

						<Typography variant='h5' style={{ color: '#fff', fontWeight: 'bold' }}>
							I'm Marvin Caragay.
						</Typography>

						<Typography variant='h6' component='h3' style={{ color: '#FFFFFF8C', fontWeight: 'lighter' }}>
							(Software Engineer)
						</Typography>
					</CardContent>
				</Grid>

				<Grid item sm={8} style={{ color: '#FFFFFF8C', fontWeight: 'lighter' }}>
					<Typography paragraph>
						After developing Lost & Found system and User Request Form while working as IT Specialist in the Hospitality
						industry for several years. My desire to pursue my passion for software development is unbearable to ignore.
					</Typography>
					<Typography paragraph>
						In February 2019, I left the unhappy life I was in to focus solely on growing and honing my programming
						skills. My passion for development is incomparable. Every day I wake up excited to code and sometimes
						frustrated after realizing why my code does not work. I love every aspect of turning ideas into software
						products and find each step of the way exciting.
					</Typography>
					<Typography paragraph>
						Besides coding, I like watching bastketball and tennis, working out in the gym, visiting friends, and
						playing online games.
					</Typography>

					<Typography paragraph variant='subtitle2'>
						<b style={{ color: '#fff' }}>Frontend:</b> JavaScript ES6+, React, React Native, Redux, TypeScript, HTML,
						CSS, jQuery, Babel, Webpack, Material-UI, Styled-Components, Bootstrap
					</Typography>
					<Typography paragraph variant='subtitle2'>
						<b style={{ color: '#fff' }}>Backend:</b> Node, Express, MySQL, MongoDB, PostgreSQL, Docker, GraphQL, Redis,
						Nginx, AWS (EC2, S3)
					</Typography>

					<Typography paragraph variant='subtitle2'>
						<b style={{ color: '#fff' }}>Familliar:</b> Agile(scrum), npm, Cassandra, Linux, Git, Mocha/Chai,
						Jest/Enzyme, Next.js, New Relic, Loader.io, Jmeter
					</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default Me;
