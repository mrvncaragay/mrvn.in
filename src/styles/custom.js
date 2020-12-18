import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
	typography: {
		fontFamily: ['Roboto', 'sans-serif', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"'].join(','),
	},
	overrides: {
		PrivateTabIndicator: {
			colorSecondary: {
				display: 'none',
			},
		},

		MuiTab: {
			textColorInherit: {
				fontSize: 12,
				opacity: 0.3,
				color: '#fff',
			},
		},

		MuiPaper: {
			root: {
				backgroundColor: 'inherit',
			},
		},

		MuiAccordionSummary: {
			content: {
				flexDirection: 'column',
			},
		},

		MuiIconButton: {
			root: {
				color: '#fff',
			},
		},

		MuiTypography: {
			paragraph: {
				fontSize: 14,
			},
		},
	},
});
