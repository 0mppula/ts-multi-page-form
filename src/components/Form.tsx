import { useState } from 'react';

import FormGroup from './FormComponents/FormGroup';
import FormProgressBar from './FormComponents/FormProgressBar';
import { selectItemType } from '../assets/data/nationalities';
import '../assets/stylesheets/form.css';
import FormPage1 from './FormComponents/FormPage1';
import FormPage2 from './FormComponents/FormPage2';
import FormPage3 from './FormComponents/FormPage3';

export interface FormPageProps {
	formData: FormDataType;
	handleChange: Function;
	handleSelectChange: Function;
	handleDateChange: Function;
}

export interface FormSubmitPageProps {
	formData: FormDataType;
	formConfirmData: FormConfirmDataType;
	handleConfirmChange: Function;
}

export interface InputFieldStringType {
	value: string;
	error: string;
	page: number;
	required: boolean;
}

export interface InputFieldSelectType {
	value: selectItemType;
	error: string;
	page: number;
	required: boolean;
}

export interface InputFieldDateType {
	value: Date;
	error: string;
	page: number;
	required: boolean;
}

export interface FormDataType {
	// Page 1
	firstName: InputFieldStringType;
	lastName: InputFieldStringType;
	nationality: InputFieldSelectType;
	sex: InputFieldSelectType;
	dateOfBirth: InputFieldDateType;
	email: InputFieldStringType;
	phoneNumber: InputFieldStringType;
	address: InputFieldStringType;
	zipCode: InputFieldStringType;
	city: InputFieldStringType;
	country: InputFieldSelectType;
	// Page 2
	school: InputFieldStringType;
	schoolStartDate: InputFieldDateType;
	employer: InputFieldStringType;
	employerStartDate: InputFieldDateType;
	salary: InputFieldStringType;
	netWorth: InputFieldStringType;
	additionalInfo: InputFieldStringType;
}

interface FormConfirmDataType {
	// Page 3
	confirmPersonalInfo: boolean;
	confirmTos: boolean;
}

const Form = () => {
	const [formPageIndex, setFormPageIndex] = useState<number>(0);
	const [formData, setFormData] = useState<FormDataType>({
		firstName: { value: '', error: '', page: 1, required: true },
		lastName: { value: '', error: '', page: 1, required: true },
		nationality: {
			value: { value: null, label: '-- Select an Option --' },
			error: '',
			page: 1,
			required: true,
		},
		sex: {
			value: { value: null, label: '-- Select an Option --' },
			error: '',
			page: 1,
			required: true,
		},
		dateOfBirth: { value: new Date(), error: '', page: 1, required: true },
		email: { value: '', error: '', page: 1, required: true },
		phoneNumber: { value: '', error: '', page: 1, required: false },
		address: { value: '', error: '', page: 1, required: true },
		zipCode: { value: '', error: '', page: 1, required: true },
		city: { value: '', error: '', page: 1, required: true },
		country: {
			value: { value: null, label: '-- Select an Option --' },
			error: '',
			page: 1,
			required: true,
		},
		school: { value: '', error: '', page: 2, required: true },
		schoolStartDate: { value: new Date(), error: '', page: 2, required: true },
		employer: { value: '', error: '', page: 2, required: true },
		employerStartDate: { value: new Date(), error: '', page: 2, required: true },
		salary: { value: '', error: '', page: 2, required: true },
		netWorth: { value: '', error: '', page: 2, required: false },
		additionalInfo: { value: '', error: '', page: 2, required: false },
	});
	const [formConfirmData, setFormConfirmData] = useState<FormConfirmDataType>({
		confirmPersonalInfo: false,
		confirmTos: false,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const field = e.target.name;
		const value = e.target.value;
		const fieldObj = formData[field as keyof FormDataType];

		setFormData((prevState) => ({ ...prevState, [field]: { ...fieldObj, value } }));
	};

	const handleConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const field = e.target.name;
		const value = formConfirmData[field as keyof FormConfirmDataType];

		setFormConfirmData((prevState) => ({ ...prevState, [field]: !value }));
	};

	const handleSubmit = (e: React.MouseEvent) => {
		e.preventDefault();
		console.log('SUBMITTING');
	};

	const handleDateChange = (date: Date, field: string) => {
		const fieldObj = formData[field as keyof FormDataType];

		setFormData((prevState) => ({ ...prevState, [field]: { ...fieldObj, value: date } }));
	};

	const handleSelectChange = (e: selectItemType, field: string) => {
		const fieldObj = formData[field as keyof FormDataType];

		// Set the value of the selection to lowercase.
		setFormData((prevState) => ({
			...prevState,
			[field]: { ...fieldObj, value: { ...e, value: e.value?.toLocaleLowerCase() } },
		}));
	};

	const handlePageIncrement = (e: React.MouseEvent) => {
		e.preventDefault();
		if (formPageIndex < formPages.length - 1) {
			let error = validateFormPage();
			!error && setFormPageIndex((prevState) => prevState + 1);
		}
	};

	const validateFormPage = (): boolean => {
		let error: boolean = false;
		const allFormFields = { ...formData };

		// Loop over the form data and push current pages field objects to array for validation.
		Object.keys(formData).forEach((key) => {
			const fieldObj = formData[key as keyof FormDataType];
			if (fieldObj.page === formPageIndex + 1 && fieldObj.required) {
				// Check if required field is not empty.
				if (!fieldObj.value) {
					allFormFields[key as keyof FormDataType].error = 'This field is required!';
					error = true;
				} else {
					allFormFields[key as keyof FormDataType].error = '';
				}

				// Check if the field object is from a select element.
				if (typeof fieldObj.value === 'object' && fieldObj.value !== null) {
					for (const [key, value] of Object?.entries(fieldObj.value)) {
						// Only loop through the value key of the select elements value
						if (key === 'value') {
							if (value === null) {
								fieldObj.error = 'This field is required!';
								error = true;
							} else {
								fieldObj.error = '';
							}
						}
					}
				}
			}
		});
		setFormData({ ...allFormFields });
		return error;
	};

	const handlePageDecrement = (e: React.MouseEvent) => {
		e.preventDefault();
		if (formPageIndex > 0) {
			setFormPageIndex((prevState) => prevState - 1);
		}
	};

	const formPages = [
		// Personal info page
		<FormPage1
			formData={formData}
			handleChange={handleChange}
			handleDateChange={handleDateChange}
			handleSelectChange={handleSelectChange}
		/>,
		// Career info page
		<FormPage2
			formData={formData}
			handleChange={handleChange}
			handleDateChange={handleDateChange}
			handleSelectChange={handleSelectChange}
		/>,
		// Summary / submit page
		<FormPage3
			formData={formData}
			formConfirmData={formConfirmData}
			handleConfirmChange={handleConfirmChange}
		/>,
	];

	return (
		<div className="form-container">
			<FormProgressBar formPageIndex={formPageIndex} lastPageIndex={formPages.length} />
			<form>
				{formPages[formPageIndex]}

				<FormGroup buttonsContainer>
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
							onClick={(e) => handleSubmit(e)}
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
