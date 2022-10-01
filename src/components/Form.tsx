import { useState } from 'react';

import FormGroup from './FormComponents/FormGroup';
import TextInput from './FormComponents/TextInput';
import FormProgressBar from './FormComponents/FormProgressBar';
import SelectInput from './FormComponents/SelectInput';
import { nationalities, selectItemType } from '../assets/data/nationalities';
import '../assets/stylesheets/form.css';
import { sexes } from '../assets/data/sexes';
import { countries } from '../assets/data/countries';

interface FormDataType {
	firstName: string;
	lastName: string;
	nationality: selectItemType;
	sex: selectItemType;
	dateOfBirth: string;
	email: string;
	phoneNumber: string;
	address: string;
	zipCode: string;
	city: string;
	country: selectItemType;
}

interface FormErrorsType {
	firstNameError: string;
	lastNameError: string;
	nationalityError: string;
	sexError: string;
	dateOfBirthError: string;
	emailError: string;
	phoneNumberError: string;
	addressError: string;
	zipCodeError: string;
	cityError: string;
	countryError: string;
}

const Form = () => {
	const [formData, setFormData] = useState<FormDataType>({
		firstName: '',
		lastName: '',
		nationality: { value: null, label: '-- Select an Option --' },
		sex: { value: null, label: '-- Select an Option --' },
		dateOfBirth: '',
		email: '',
		phoneNumber: '',
		address: '',
		zipCode: '',
		city: '',
		country: { value: null, label: '-- Select an Option --' },
	});
	const [formErrors, setFormErrors] = useState<FormErrorsType>({
		firstNameError: '',
		lastNameError: '',
		nationalityError: '',
		sexError: '',
		dateOfBirthError: '',
		emailError: '',
		phoneNumberError: '',
		addressError: '',
		zipCodeError: '',
		cityError: '',
		countryError: '',
	});

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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const field = e.target.name;
		const value = e.target.value;

		setFormData({ ...formData, [field]: value });
	};

	const handleSelectChange = (e: selectItemType, field: string) => {
		// Set the value of the selection to lowercase.
		setFormData((prevState) => ({
			...prevState,
			[field]: { ...e, value: e.value?.toLocaleLowerCase() },
		}));
	};

	return (
		<form>
			<FormProgressBar />
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
				<TextInput
					value={dateOfBirth}
					handleChange={handleChange}
					label="Date of Birth // DATE-TIME ELEMENT"
					name="dateOfBirth"
					placeholder="Enter your birthday"
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

			<FormGroup>
				<button className="btn btn-block">Previous Page</button>
				<button className="btn btn-block">Next Page</button>
			</FormGroup>
		</form>
	);
};

export default Form;
