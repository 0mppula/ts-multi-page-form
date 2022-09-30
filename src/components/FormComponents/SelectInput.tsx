import { FC, useRef } from 'react';
import Select from 'react-select';
import { customStyles, customTheme } from '../../helpers/reactSelectStyles';
import nationalities from '../../assets/data/nationalities';

interface SelectInputProps {
	label: string;
	name: string;
	required?: boolean;
	handleSelectChange: Function;
	error?: string;
	value: selectItemType;
}

export interface selectItemType {
	value: string | null;
	label: string;
}

const SelectInput: FC<SelectInputProps> = ({ label, value, handleSelectChange, required }) => {
	const selectRef = useRef(null);

	const handleFocus = (ref: any) => {
		if (ref.current) ref.current.focus();
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
				options={nationalities}
				value={value}
				isSearchable
				onChange={(e) => handleSelectChange(e)}
			/>
		</div>
	);
};

export default SelectInput;
