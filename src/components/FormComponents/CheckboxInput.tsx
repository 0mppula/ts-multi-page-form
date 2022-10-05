import { FC, useRef } from 'react';

interface CheckboxInputProps {
	label: string;
	name: string;
	required?: boolean;
	value: boolean;
	error: string;
	handleChange: Function;
}

const CheckboxInput: FC<CheckboxInputProps> = ({
	value,
	handleChange,
	required,
	label,
	name,
	error,
}) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleFocus = (ref: any) => {
		if (ref.current) ref.current.click();
	};

	return (
		<div className="checkbox-input-group">
			<label onClick={() => handleFocus(inputRef)}>
				{label}
				{required && <span>*</span>}
			</label>

			<input
				ref={inputRef}
				checked={value}
				onChange={(e) => handleChange(e)}
				type="checkbox"
				name={name}
			/>

			<div className="error">{error}</div>
		</div>
	);
};

export default CheckboxInput;
