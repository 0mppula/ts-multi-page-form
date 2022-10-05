import { FC } from 'react';
import moment from 'moment';

import FormGroup from './FormGroup';
import CheckboxInput from './CheckboxInput';
import { FormDataType, FormConfirmDataType } from '../Form/formTypes';

export interface FormSubmitPageProps {
	formData: FormDataType;
	formConfirmData: FormConfirmDataType;
	handleConfirmChange: Function;
}

const FormSubmitPage: FC<FormSubmitPageProps> = ({ formData, formConfirmData, handleConfirmChange }) => {
	const {
		firstName: { value: firstName },
		lastName: { value: lastName },
		nationality: {
			value: { value: nationality },
		},
		sex: {
			value: { value: sex },
		},
		dateOfBirth: { value: dateOfBirth },
		email: { value: email },
		phoneNumber: { value: phoneNumber },
		address: { value: address },
		zipCode: { value: zipCode },
		city: { value: city },
		country: {
			value: { value: country },
		},
		school: { value: school },
		schoolStartDate: { value: schoolStartDate },
		employer: { value: employer },
		employerStartDate: { value: employerStartDate },
		salary: { value: salary },
		netWorth: { value: netWorth },
		additionalInfo: { value: additionalInfo },
	} = formData;

	const { confirmPersonalInfo, confirmTos } = formConfirmData;

	return (
		<>
			<h2 className="form-header">Your Information</h2>
			<FormGroup column>
				{firstName && <p>First Name: {firstName}</p>}
				{lastName && <p>Last Name: {lastName}</p>}
				{nationality && <p>Nationality: {nationality}</p>}
				{sex && <p>Sex: {sex}</p>}
				{dateOfBirth && <p>Date of Birth: {moment(dateOfBirth).format('DD.MM.YYYY')}</p>}
				{email && <p>Email Address: {email}</p>}
				{phoneNumber && <p>Phone Number: {phoneNumber}</p>}
				{address && <p>Address: {address}</p>}
				{zipCode && <p>ZIP Code: {zipCode}</p>}
				{city && <p>City: {city}</p>}
				{country && <p>Country: {country}</p>}
				{school && <p>School: {school}</p>}
				{schoolStartDate && (
					<p>School Starting Date: {moment(schoolStartDate).format('DD.MM.YYYY')}</p>
				)}
				{employer && <p>Employer: {employer}</p>}
				{employerStartDate && (
					<p>Job Starting Date: {moment(employerStartDate).format('DD.MM.YYYY')}</p>
				)}
				{salary && <p>Salary: {salary}</p>}
				{netWorth && <p>Net Worth: {netWorth}</p>}
				{additionalInfo && <p>Additional Info: {additionalInfo}</p>}
			</FormGroup>

			<hr />

			<CheckboxInput
				value={confirmPersonalInfo.value}
				error={confirmPersonalInfo.error}
				handleChange={handleConfirmChange}
				label="All the personal information that I have provided is correct."
				name="confirmPersonalInfo"
			/>

			<CheckboxInput
				value={confirmTos.value}
				error={confirmTos.error}
				handleChange={handleConfirmChange}
				label="I read and accept the terms of service"
				name="confirmTos"
			/>
		</>
	);
};

export default FormSubmitPage;
