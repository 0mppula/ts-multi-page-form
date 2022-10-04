import { FC, useRef } from 'react';

interface TextareaInputProps {
	label: string;
	name: string;
	placeholder: string;
	required?: boolean;
	error?: string;
	value: string;
	handleChange: Function;
}

const TextareaInput: FC<TextareaInputProps> = ({
	value,
	handleChange,
	required,
	label,
	name,
	placeholder,
	error,
}) => {
	const inputRef = useRef<HTMLTextAreaElement>(null);

	const handleFocus = (ref: any) => {
		if (ref.current) ref.current.focus();
	};

	return (
		<div className="input-group">
			<label onClick={() => handleFocus(inputRef)}>
				{label}
				{required && <span>*</span>}
			</label>

			<textarea
				ref={inputRef}
				value={value}
				onChange={(e) => handleChange(e)}
				name={name}
				placeholder={placeholder}
        rows={4}
        maxLength={500}
			/>

			<div className="error">{error}</div>
		</div>
	);
};

export default TextareaInput;
