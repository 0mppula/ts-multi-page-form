import { FC, useRef, useState } from 'react';
import Select from 'react-select';
import { customStyles, customTheme } from '../../helpers/reactSelectStyles';
import { selectItemType } from '../../assets/data/nationalities';

interface SelectInputProps {
	label: string;
	name: string;
	value: selectItemType;
	options: selectItemType[];
	error?: string;
	handleSelectChange: Function;
	required?: boolean;
}

const SelectInput: FC<SelectInputProps> = ({
	label,
	name,
	value,
	options,
	error,
	handleSelectChange,
	required,
}) => {
	const [menuFitsInWindow, setMenuFitsInWindow] = useState(true);
	const selectRef = useRef(null);

	const handleFocus = (ref: any) => {
		if (ref.current) ref.current.focus();
	};

	const handleMenuOpen = (ref: any) => {
		const menuheight = 290;
		const selectMenuYPos = ref.current.inputRef.getBoundingClientRect().y;
		const windowHeigth = window.innerHeight;
		const menuFitsInWindow = selectMenuYPos + menuheight < windowHeigth;

		setMenuFitsInWindow(menuFitsInWindow);
	};

	return (
		<div className="input-group">
			<label onClick={() => handleFocus(selectRef)}>
				{label}
				{required && <span>*</span>}
			</label>

			<Select<selectItemType>
				ref={selectRef}
				className="react-select-container"
				classNamePrefix="react-select"
				theme={customTheme}
				styles={customStyles}
				maxMenuHeight={231}
				onMenuOpen={() => handleMenuOpen(selectRef)}
				menuPlacement={menuFitsInWindow ? 'auto' : 'top'}
				options={options}
				value={value}
				isSearchable
				onChange={(e) => handleSelectChange(e, name)}
			/>

			<div className="error">{error}</div>
		</div>
	);
};

export default SelectInput;
