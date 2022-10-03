import { FC, useRef } from 'react';

interface TextInputProps {
	label: string;
	name: string;
	placeholder: string;
	required?: boolean;
	error?: string;
	value: string;
	handleChange: Function;
}

const TextInput: FC<TextInputProps> = ({
	value,
	handleChange,
	required,
	label,
	name,
	placeholder,
	error,
}) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleFocus = (ref: any) => {
		if (ref.current) ref.current.focus();
	};

	return (
		<div className="input-group">
			<label onClick={() => handleFocus(inputRef)}>
				{label}
				{required && <span>*</span>}
			</label>

			<input
				value={value}
				onChange={(e) => handleChange(e)}
				ref={inputRef}
				type="text"
				name={name}
				placeholder={placeholder}
			/>

			<div className="error">{error}</div>
		</div>
	);
};

export default TextInput;
