import { FC, ReactNode } from 'react';

interface FormGroupProps {
	children?: ReactNode;
	buttonsContainer?: boolean;
	column?: boolean;
}

const FormGroup: FC<FormGroupProps> = ({ children, buttonsContainer, column }) => {
	return (
		<div className="form-group">
			<div
				className={`input-group-container ${buttonsContainer ? 'btn-input-group' : ''} ${
					column ? 'column' : ''
				}`}
			>
				{children}
			</div>
		</div>
	);
};

export default FormGroup;
