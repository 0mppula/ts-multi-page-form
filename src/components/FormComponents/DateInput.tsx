import { FC } from 'react';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';

import 'react-datepicker/dist/react-datepicker.css';

interface DateInputProps {
	label: string;
	name: string;
	placeholder: string;
	required?: boolean;
	error?: string;
	value: Date;
	handleDateChange: Function;
}

const DateInput: FC<DateInputProps> = ({
	label,
	name,
	placeholder,
	required,
	value,
	handleDateChange,
	error,
}) => {
	let inputRef: any;

	const handleFocus = () => {
		if (inputRef) inputRef.input.focus();
	};

	return (
		<div className="input-group">
			<label onClick={handleFocus}>
				{label}
				{required && <span>*</span>}
			</label>

			<DatePicker
				ref={(datepicker) => {
					inputRef = datepicker;
				}}
				selected={value}
				onChange={(date: Date) => handleDateChange(date, name)}
				minDate={new Date('1900-01-01')}
				maxDate={new Date()}
				placeholderText={placeholder}
				dateFormat="dd.MM.yyyy"
			/>

			<div className="date-icon">
				<FaCalendarAlt onClick={handleFocus} style={{ marginTop: '-0.125rem' }} />
			</div>

			<div className="error">{error}</div>
		</div>
	);
};

export default DateInput;
