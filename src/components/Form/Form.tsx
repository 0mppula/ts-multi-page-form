import { useState } from 'react';

import FormProgressBar from '../FormComponents/FormProgressBar';
import { selectItemType } from '../../assets/data/nationalities';
import '../../assets/stylesheets/form.css';
import FormPage1 from '../FormComponents/FormPage1';
import FormPage2 from '../FormComponents/FormPage2';
import FormSubmitPage from '../FormComponents/FormSubmitPage';
import { FormDataType, FormConfirmDataType } from './formTypes';
import { initialformConfirmData, initialformData } from './initialFormStates';
import FormControlButtons from '../FormComponents/FormControlButtons';

const Form = () => {
	const [formPageIndex, setFormPageIndex] = useState<number>(0);
	const [formData, setFormData] = useState<FormDataType>(initialformData);
	const [formConfirmData, setFormConfirmData] =
		useState<FormConfirmDataType>(initialformConfirmData);
	const [submitted, setSubmitted] = useState<boolean>(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const field = e.target.name;
		const value = e.target.value;
		const fieldObj = formData[field as keyof FormDataType];

		setFormData((prevState) => ({ ...prevState, [field]: { ...fieldObj, value } }));
	};

	const handleConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const field = e.target.name;
		const value = formConfirmData[field as keyof FormConfirmDataType].value;
		const fieldObj = formConfirmData[field as keyof FormConfirmDataType];

		setFormConfirmData((prevState: FormConfirmDataType) => ({
			...prevState,
			// toggle the value of the checkbox
			[field]: { ...fieldObj, value: !value },
		}));
	};

	const handleSubmit = (e: React.MouseEvent) => {
		e.preventDefault();

		const { confirmPersonalInfo, confirmTos } = formConfirmData;
		const newConfirmData = { ...formConfirmData };

		// Check if the users accepts terms and set error messages for checkboxes
		Object.keys(newConfirmData).forEach((key) => {
			const fieldObj = newConfirmData[key as keyof FormConfirmDataType];

			if (!fieldObj.value) {
				fieldObj.error = 'Please check this box!';
			} else {
				fieldObj.error = '';
			}
		});

		// If all check boxes are checked (user accepts all terms of service etc.. submit form)
		if (confirmPersonalInfo.value && confirmTos.value) {
			setSubmitted(true);
		}

		setFormConfirmData({ ...formConfirmData });
	};

	const handleFormReset = () => {
		setSubmitted(false);
		setFormPageIndex(0);
		setFormConfirmData(initialformConfirmData);
		setFormData(initialformData);
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
		<FormSubmitPage
			formData={formData}
			formConfirmData={formConfirmData}
			handleConfirmChange={handleConfirmChange}
		/>,
	];

	if (submitted)
		return (
			<div className="form-receipt-container">
				<h1>Thank You!</h1>
				<p>The form has been submitted</p>
				<button className="btn" onClick={handleFormReset}>
					Restart
				</button>
			</div>
		);

	return (
		<div className="form-container">
			<FormProgressBar formPageIndex={formPageIndex} lastPageIndex={formPages.length} />
			<form>
				{/* The current active form page */}
				{formPages[formPageIndex]}

				<FormControlButtons
					formPageIndex={formPageIndex}
					formPages={formPages}
					handlePageDecrement={handlePageDecrement}
					handlePageIncrement={handlePageIncrement}
					handleSubmit={handleSubmit}
				/>
			</form>
		</div>
	);
};

export default Form;
