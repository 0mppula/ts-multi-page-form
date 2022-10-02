import { FC } from 'react';

import TextInput from '../FormComponents/TextInput';
import SelectInput from '../FormComponents/SelectInput';
import FormGroup from '../FormComponents/FormGroup';
import { nationalities } from '../../assets/data/nationalities';
import { sexes } from '../../assets/data/sexes';
import { countries } from '../../assets/data/countries';
import DateInput from '../FormComponents/DateInput';
import { FormDataType, FormErrorsType } from '../Form';

interface FormPage1Props {
	formData: FormDataType;
	formErrors: FormErrorsType;
	handleChange: Function;
	handleSelectChange: Function;
	handleDateChange: Function;
}

const FormPage1: FC<FormPage1Props> = ({
	formData,
	formErrors,
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
	const {
		firstNameError,
		lastNameError,
		nationalityError,
		sexError,
		dateOfBirthError,
		emailError,
		phoneNumberError,
		addressError,
		zipCodeError,
		cityError,
		countryError,
	} = formErrors;

	return (
		<>
			<FormGroup>
				<TextInput
					value={firstName}
					handleChange={handleChange}
					label="First Name"
					name="firstName"
					placeholder="Enter your first name"
					error={firstNameError}
					required
				/>

				<TextInput
					value={lastName}
					handleChange={handleChange}
					label="Last Name"
					name="lastName"
					placeholder="Enter your last name"
					error={lastNameError}
					required
				/>
			</FormGroup>

			<FormGroup>
				<SelectInput
					label="Nationality"
					name="nationality"
					value={nationality}
					options={nationalities}
					error={nationalityError}
					handleSelectChange={handleSelectChange}
					required
				/>

				<SelectInput
					label="Sex"
					name="sex"
					value={sex}
					options={sexes}
					error={sexError}
					handleSelectChange={handleSelectChange}
					required
				/>
			</FormGroup>

			<FormGroup>
				<DateInput
					value={dateOfBirth}
					handleDateChange={handleDateChange}
					label="Date of Birth"
					name="dateOfBirth"
					placeholder="Enter your birthday (DD.MM.YYYY)"
					error={dateOfBirthError}
					required
				/>
			</FormGroup>

			<FormGroup>
				<TextInput
					value={email}
					handleChange={handleChange}
					label="Email Address"
					name="email"
					placeholder="Enter your email address"
					error={emailError}
					required
				/>
			</FormGroup>

			<FormGroup>
				<TextInput
					value={phoneNumber}
					handleChange={handleChange}
					label="Phone Number"
					name="phoneNumber"
					placeholder="Enter your phone number"
					error={phoneNumberError}
				/>
			</FormGroup>

			<FormGroup>
				<TextInput
					value={address}
					handleChange={handleChange}
					label="Address"
					name="address"
					placeholder="Enter your street address"
					error={addressError}
					required
				/>

				<TextInput
					value={zipCode}
					handleChange={handleChange}
					label="ZIP Code"
					name="zipCode"
					placeholder="Enter your ZIP code"
					error={zipCodeError}
					required
				/>
			</FormGroup>

			<FormGroup>
				<TextInput
					value={city}
					handleChange={handleChange}
					label="City"
					name="city"
					placeholder="Enter your city"
					error={cityError}
					required
				/>

				<SelectInput
					label="Country"
					name="country"
					value={country}
					options={countries}
					error={countryError}
					handleSelectChange={handleSelectChange}
					required
				/>
			</FormGroup>
		</>
	);
};

export default FormPage1;
