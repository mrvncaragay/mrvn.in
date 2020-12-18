import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
	typography: {
		fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'].join(','),
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
	},
});
