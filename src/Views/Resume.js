import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GetApp from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		width: '100%',
		marginTop: 24,
	},

	button: {
		margin: theme.spacing(1),
		position: 'absolute',
	},
}));

const Resume = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Button
				variant='contained'
				color='default'
				className={classes.button}
				startIcon={<GetApp />}
				onClick={() =>
					window.open(
						'https://docs.google.com/document/d/1Qtf19ZW47kYCcm06HFqylTafhlyXRyVCyDHD5wHeUck/export?format=pdf'
					)
				}
			>
				Download
			</Button>

			<embed
				type='application/pdf'
				src='https://docs.google.com/document/d/1Qtf19ZW47kYCcm06HFqylTafhlyXRyVCyDHD5wHeUck/preview'
				style={{ height: 900, flex: 1 }}
			/>
		</div>
	);
};

export default Resume;
