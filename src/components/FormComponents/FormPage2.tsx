import { FC } from 'react';

import TextInput from './TextInput';
import FormGroup from './FormGroup';
import DateInput from './DateInput';
import { FormPageProps } from '../Form';
import TextareaInput from './TextareaInput';

const FormPage2: FC<FormPageProps> = ({
	formData,
	handleChange,
	handleDateChange,
}) => {
	const {
		school,
		schoolStartDate,
		employer,
		employerStartDate,
		salary,
		netWorth,
		additionalInfo,
	} = formData;

	return (
		<>
			<FormGroup>
				<TextInput
					value={school.value}
					handleChange={handleChange}
					label="School"
					name="school"
					placeholder="Enter your schools name"
					error={school.error}
					required={school.required}
				/>

				<DateInput
					value={schoolStartDate.value}
					handleDateChange={handleDateChange}
					label="School Starting Date"
					name="schoolStartDate"
					placeholder="Starting date of schoold (DD.MM.YYYY)"
					error={schoolStartDate.error}
					required={schoolStartDate.required}
				/>
			</FormGroup>

			<FormGroup>
				<TextInput
					value={employer.value}
					handleChange={handleChange}
					label="Employer"
					name="employer"
					placeholder="Enter your employers name"
					error={employer.error}
					required={employer.required}
				/>
				<DateInput
					value={employerStartDate.value}
					handleDateChange={handleDateChange}
					label="Job Starting Date"
					name="employerStartDate"
					placeholder="Starting date of job (DD.MM.YYYY)"
					error={employerStartDate.error}
					required={employerStartDate.required}
				/>
			</FormGroup>

			<FormGroup>
				<TextInput
					value={salary.value}
					handleChange={handleChange}
					label="Salary Per Month"
					name="salary"
					placeholder="Enter your monthly gross salary"
					error={salary.error}
					required={salary.required}
					number
				/>
			</FormGroup>

			<FormGroup>
				<TextInput
					value={netWorth.value}
					handleChange={handleChange}
					label="Net Worth"
					name="netWorth"
					placeholder="Enter your net worth"
					error={netWorth.error}
					required={netWorth.required}
					number
				/>
			</FormGroup>

			<FormGroup>
				<TextareaInput
					value={additionalInfo.value}
					handleChange={handleChange}
					label="Additional Info"
					name="additionalInfo"
					placeholder="Enter additional information you want to tell us (max 500 characters)"
					error={additionalInfo.error}
					required={additionalInfo.required}
				/>
			</FormGroup>
		</>
	);
};

export default FormPage2;
