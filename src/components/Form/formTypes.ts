import { selectItemType } from '../../assets/data/nationalities';

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

export interface FormConfirmDataType {
	// Page 3
	confirmPersonalInfo: {
		value: boolean;
		error: string;
	};
	confirmTos: {
		value: boolean;
		error: string;
	};
}
