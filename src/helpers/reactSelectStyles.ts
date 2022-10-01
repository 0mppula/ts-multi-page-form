import { cssVar } from './getCssVariable';

export const customStyles = {
	control: (provided: any, state: any) => ({
		...provided,
		// Outline of the select element when when focused and blurred
		outline: state.isFocused
			? `2px solid ${cssVar('--clr-primary')}`
			: `1px solid ${cssVar('--clr-gray')}`,
	}),
};

export const customTheme = (theme: any) => ({
	...theme,
	colors: {
		...theme.colors,
		// Hovering over select list item background color
		primary25: cssVar('--clr-primary-light'),
		// Selected list items background color
		primary: cssVar('--clr-primary'),
		// Hover color of the drop down arrow toggler
		neutral40: cssVar('--clr-text-primary'),
		// Color of the drop down arrow toggler
		neutral20: cssVar('--clr-gray'),
		// input text color
		neutral80: cssVar('--clr-text-primary'),
	},
});
