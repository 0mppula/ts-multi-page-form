import { FC, ReactNode } from 'react';

import FormGroup from '../FormComponents/FormGroup';

interface FormControlButtonsProps {
	formPageIndex: number;
	formPages: ReactNode[];
	handlePageDecrement: Function;
	handlePageIncrement: Function;
	handleSubmit: Function;
}

const FormControlButtons: FC<FormControlButtonsProps> = ({
	formPageIndex,
	formPages,
	handlePageDecrement,
	handlePageIncrement,
	handleSubmit,
}) => {
	return (
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
	);
};

export default FormControlButtons;
