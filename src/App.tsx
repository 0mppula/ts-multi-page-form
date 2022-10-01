import { FC } from 'react';
import Footer from './components/Footer/Footer';
import Form from './components/Form';

const App: FC = () => {
	return (
		<>
			<div className="app-container">
				<div className="header">
					<h1>TypeScript Multi-Page Form 📃</h1>
				</div>

				<Form />
			</div>
			<Footer />
		</>
	);
};

export default App;
