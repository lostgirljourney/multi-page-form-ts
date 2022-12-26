import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { interviewSchema } from '../validations';
import { RootState } from '../store';
import {
	setFormPage,
	setInterviewSettings,
	setJobDetails
} from '../store/slice/formSlice';

const InterviewSettings = () => {
	const { interviewSettings } = useSelector((state: RootState) => state.form);
	const dispatch = useDispatch();
	const {
		errors,
		touched,
		values,
		handleChange,
		handleSubmit,
		handleBlur,
		resetForm
	} = useFormik({
		initialValues: { ...interviewSettings },
		validationSchema: interviewSchema,
		onSubmit: async (values) => {
			console.log(values);
			dispatch(setJobDetails(values));
			await new Promise((r) => setTimeout(r, 2000));
			resetForm({ values: { ...interviewSettings } });
			await new Promise((r) => setTimeout(r, 2000));
			window.location.reload();
		}
	});

	return (
		<form autoComplete='off' onSubmit={handleSubmit}>
			<div>
				<label htmlFor='interviewMode'>Interview Mode</label>
				<input
					type='text'
					name='interviewMode'
					id='interviewMode'
					value={values.interviewMode}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.interviewMode && touched.interviewMode && (
					<p>{errors.interviewMode}</p>
				)}
			</div>
			<div>
				<label htmlFor='interviewDuration'>Interview Duration</label>
				<input
					type='text'
					name='interviewDuration'
					id='interviewDuration'
					value={values.interviewDuration}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.interviewDuration && touched.interviewDuration && (
					<p>{errors.interviewDuration}</p>
				)}
			</div>
			<div>
				<label htmlFor='interviewLanguage'>Interview Language</label>
				<input
					type='text'
					name='interviewLanguage'
					id='interviewLanguage'
					value={values.interviewLanguage}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.interviewLanguage && touched.interviewLanguage && (
					<p>{errors.interviewLanguage}</p>
				)}
			</div>
			<button
				onClick={() => {
					dispatch(setFormPage(2));
					dispatch(setInterviewSettings(values));
				}}
			>
				Previous
			</button>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default InterviewSettings;
