export const initialformData = {
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
};

export const initialformConfirmData = {
	confirmPersonalInfo: { value: false, error: '' },
	confirmTos: { value: false, error: '' },
};
