import { createSlice } from '@reduxjs/toolkit';

interface InitialStateType {
	requisitionDetails: {
		requestTitle: string;
		owner: string;
		hiringManager: string;
		openings: string;
		urgency: string;
		employmentType: string;
	};
	jobDetails: {
		jobTitle: string;
		jobDescription: string;
		jobLocation: string;
	};
	interviewSettings: {
		interviewMode: string;
		interviewDuration: string;
		interviewLanguage: string;
	};
	formPage: number;
}

const initialState: InitialStateType = {
	requisitionDetails: {
		requestTitle: '',
		owner: '',
		hiringManager: '',
		openings: '',
		urgency: 'Select urgency',
		employmentType: ''
	},
	jobDetails: {
		jobTitle: '',
		jobDescription: '',
		jobLocation: ''
	},
	interviewSettings: {
		interviewMode: '',
		interviewDuration: '',
		interviewLanguage: ''
	},
	formPage: 1
};

export const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		setRequisitionDetails: (state, action) => {
			state.requisitionDetails = action.payload;
		},
		setJobDetails: (state, action) => {
			state.jobDetails = action.payload;
		},
		setInterviewSettings: (state, action) => {
			state.interviewSettings = action.payload;
		},
		setFormPage: (state, action) => {
			state.formPage = action.payload;
		}
	}
});

export const {
	setRequisitionDetails,
	setJobDetails,
	setInterviewSettings,
	setFormPage
} = formSlice.actions;

export default formSlice.reducer;
