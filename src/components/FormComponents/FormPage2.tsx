import { FC } from 'react';

import TextInput from './TextInput';
import SelectInput from './SelectInput';
import FormGroup from './FormGroup';
import { nationalities } from '../../assets/data/nationalities';
import { sexes } from '../../assets/data/sexes';
import { countries } from '../../assets/data/countries';
import DateInput from './DateInput';
import { FormPageProps } from '../Form';

const FormPage2: FC<FormPageProps> = ({
	formData,
	handleChange,
	handleSelectChange,
	handleDateChange,
}) => {
	const {} = formData;

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
