import { FC } from 'react';

import TextInput from './TextInput';
import SelectInput from './SelectInput';
import FormGroup from './FormGroup';
import { nationalities } from '../../assets/data/nationalities';
import { sexes } from '../../assets/data/sexes';
import { countries } from '../../assets/data/countries';
import DateInput from './DateInput';
import { FormDataType, FormErrorsType } from '../Form';

interface FormPage2Props {
	formData: FormDataType;
	formErrors: FormErrorsType;
	handleChange: Function;
	handleSelectChange: Function;
	handleDateChange: Function;
}

const FormPage2: FC<FormPage2Props> = ({
	formData,
	formErrors,
	handleChange,
	handleSelectChange,
	handleDateChange,
}) => {
	const {} = formData;
	const {} = formErrors;

	return (
		<>
			<FormGroup>
				<input type="text" name="" id="" />
			</FormGroup>

			<FormGroup>
				<input type="text" name="" id="" />
			</FormGroup>
		</>
	);
};

export default FormPage2;
