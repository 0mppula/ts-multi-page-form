import { useState } from 'react';

import FormGroup from './FormComponents/FormGroup';
import FormProgressBar from './FormComponents/FormProgressBar';
import { selectItemType } from '../assets/data/nationalities';
import '../assets/stylesheets/form.css';
import FormPage1 from './FormComponents/FormPage1';
import FormPage2 from './FormComponents/FormPage2';

export interface FormDataType {
	firstName: string;
	lastName: string;
	nationality: selectItemType;
	sex: selectItemType;
	dateOfBirth: Date;
	email: string;
	phoneNumber: string;
	address: string;
	zipCode: string;
	city: string;
	country: selectItemType;
}

export interface FormErrorsType {
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
	const [formPageIndex, setFormPageIndex] = useState<number>(0);
	const [formData, setFormData] = useState<FormDataType>({
		firstName: '',
		lastName: '',
		nationality: { value: null, label: '-- Select an Option --' },
		sex: { value: null, label: '-- Select an Option --' },
		dateOfBirth: new Date(),
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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const field = e.target.name;
		const value = e.target.value;

		setFormData({ ...formData, [field]: value });
	};

	const handleDateChange = (date: Date, field: string) => {
		setFormData({ ...formData, [field]: date });
	};

	const handleSelectChange = (e: selectItemType, field: string) => {
		// Set the value of the selection to lowercase.
		setFormData((prevState) => ({
			...prevState,
			[field]: { ...e, value: e.value?.toLocaleLowerCase() },
		}));
	};

	const handlePageIncrement = (e: React.MouseEvent) => {
		e.preventDefault();
		if (formPageIndex < formPages.length - 1) {
			// TODO HANDLE FORM INPUT VALIDATION
			setFormPageIndex((prevState) => prevState + 1);
		}
	};

	const handlePageDecrement = (e: React.MouseEvent) => {
		e.preventDefault();
		if (formPageIndex > 0) {
			setFormPageIndex((prevState) => prevState - 1);
		}
	};

	const formPages = [
		<FormPage1
			formData={formData}
			formErrors={formErrors}
			handleChange={handleChange}
			handleDateChange={handleDateChange}
			handleSelectChange={handleSelectChange}
		/>,
		<FormPage2
			formData={formData}
			formErrors={formErrors}
			handleChange={handleChange}
			handleDateChange={handleDateChange}
			handleSelectChange={handleSelectChange}
		/>,
	];

	return (
		<div className="form-container">
			<FormProgressBar formPageIndex={formPageIndex} lastPageIndex={formPages.length} />
			<form>
				{formPages[formPageIndex]}

				<FormGroup>
					{formPageIndex > 0 && (
						<button
							className="btn btn-block-50 btn-right"
							onClick={(e) => handlePageDecrement(e)}
						>
							<span>⬅</span>
							<span>Previous Page</span>
						</button>
					)}

					{formPageIndex < formPages.length - 1 && (
						<button
							className="btn btn-block-50 btn-left"
							onClick={(e) => handlePageIncrement(e)}
						>
							<span>Next Page</span>
							<span>➡</span>
						</button>
					)}

					{formPageIndex === formPages.length - 1 && (
						<button
							className="btn btn-block-50 btn-left btn-success"
							onClick={(e) => handlePageIncrement(e)}
						>
							Submit
						</button>
					)}
				</FormGroup>
			</form>
		</div>
	);
};

export default Form;
