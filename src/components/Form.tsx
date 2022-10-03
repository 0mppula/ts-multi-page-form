import { useState } from 'react';

import FormGroup from './FormComponents/FormGroup';
import FormProgressBar from './FormComponents/FormProgressBar';
import { selectItemType } from '../assets/data/nationalities';
import '../assets/stylesheets/form.css';
import FormPage1 from './FormComponents/FormPage1';
import FormPage2 from './FormComponents/FormPage2';

export interface FormPageProps {
	formData: FormDataType;
	handleChange: Function;
	handleSelectChange: Function;
	handleDateChange: Function;
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
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const field = e.target.name;
		const value = e.target.value;
		const fieldObj = formData[field as keyof FormDataType];

		setFormData((prevState) => ({ ...prevState, [field]: { ...fieldObj, value } }));
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
			let error = false;
			const allFormFields = { ...formData };

			// 🍝 check the spaghetti

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
					if (typeof fieldObj.value === 'object') {
						for (const [key, value] of Object.entries(fieldObj.value)) {
							// Only loop through the value key
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
			!error && setFormPageIndex((prevState) => prevState + 1);
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
			handleChange={handleChange}
			handleDateChange={handleDateChange}
			handleSelectChange={handleSelectChange}
		/>,
		<FormPage2
			formData={formData}
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
