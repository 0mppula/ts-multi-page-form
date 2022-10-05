import { FC } from 'react';

import TextInput from '../FormComponents/TextInput';
import SelectInput from '../FormComponents/SelectInput';
import FormGroup from '../FormComponents/FormGroup';
import { nationalities } from '../../assets/data/nationalities';
import { sexes } from '../../assets/data/sexes';
import { countries } from '../../assets/data/countries';
import DateInput from '../FormComponents/DateInput';
import { FormPageProps } from '../Form/formTypes';

const FormPage1: FC<FormPageProps> = ({
	formData,
	handleChange,
	handleSelectChange,
	handleDateChange,
}) => {
	const {
		firstName,
		lastName,
		nationality,
		sex,
		dateOfBirth,
		email,
		phoneNumber,
		address,
		zipCode,
		city,
		country,
	} = formData;

	return (
		<>
			<FormGroup>
				<TextInput
					value={firstName.value}
					handleChange={handleChange}
					label="First Name"
					name="firstName"
					placeholder="Enter your first name"
					error={firstName.error}
					required={firstName.required}
				/>

				<TextInput
					value={lastName.value}
					handleChange={handleChange}
					label="Last Name"
					name="lastName"
					placeholder="Enter your last name"
					error={lastName.error}
					required={lastName.required}
				/>
			</FormGroup>

			<FormGroup>
				<SelectInput
					label="Nationality"
					name="nationality"
					value={nationality.value}
					options={nationalities}
					error={nationality.error}
					handleSelectChange={handleSelectChange}
					required={nationality.required}
				/>

				<SelectInput
					label="Sex"
					name="sex"
					value={sex.value}
					options={sexes}
					error={sex.error}
					handleSelectChange={handleSelectChange}
					required={sex.required}
				/>
			</FormGroup>

			<FormGroup>
				<DateInput
					value={dateOfBirth.value}
					handleDateChange={handleDateChange}
					label="Date of Birth"
					name="dateOfBirth"
					placeholder="Enter your birthday (DD.MM.YYYY)"
					error={dateOfBirth.error}
					required={dateOfBirth.required}
				/>
			</FormGroup>

			<FormGroup>
				<TextInput
					value={email.value}
					handleChange={handleChange}
					label="Email Address"
					name="email"
					placeholder="Enter your email address"
					error={email.error}
					required={email.required}
				/>
			</FormGroup>

			<FormGroup>
				<TextInput
					value={phoneNumber.value}
					handleChange={handleChange}
					label="Phone Number"
					name="phoneNumber"
					placeholder="Enter your phone number"
					error={phoneNumber.error}
					required={phoneNumber.required}
				/>
			</FormGroup>

			<FormGroup>
				<TextInput
					value={address.value}
					handleChange={handleChange}
					label="Address"
					name="address"
					placeholder="Enter your street address"
					error={address.error}
					required={address.required}
				/>

				<TextInput
					value={zipCode.value}
					handleChange={handleChange}
					label="ZIP Code"
					name="zipCode"
					placeholder="Enter your ZIP code"
					error={zipCode.error}
					required={address.required}
				/>
			</FormGroup>

			<FormGroup>
				<TextInput
					value={city.value}
					handleChange={handleChange}
					label="City"
					name="city"
					placeholder="Enter your city"
					error={city.error}
					required={city.required}
				/>

				<SelectInput
					label="Country"
					name="country"
					value={country.value}
					options={countries}
					error={country.error}
					handleSelectChange={handleSelectChange}
					required={country.required}
				/>
			</FormGroup>
		</>
	);
};

export default FormPage1;
