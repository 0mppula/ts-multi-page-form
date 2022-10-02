import { FC } from 'react';

interface FormPageProgressBarProps {
	formPageIndex: number;
	lastPageIndex: number;
}

const FormProgressBar: FC<FormPageProgressBarProps> = ({ formPageIndex, lastPageIndex }) => {
	return (
		<div className="progress-bar">
			Progress {Math.round(((formPageIndex + 1) / lastPageIndex) * 100)}%
		</div>
	);
};

export default FormProgressBar;
