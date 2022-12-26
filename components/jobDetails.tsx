import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { jobSchema } from '../validations';
import { RootState } from '../store';
import { setFormPage, setJobDetails } from '../store/slice/formSlice';

const JobDetails = () => {
	const { jobDetails } = useSelector((state: RootState) => state.form);
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
		initialValues: { ...jobDetails },
		validationSchema: jobSchema,
		onSubmit: async (values) => {
			console.log(values);
			dispatch(setJobDetails(values));
			await new Promise((r) => setTimeout(r, 2000));
			dispatch(setFormPage(3));
			resetForm({ values: { ...jobDetails } });
		}
	});

	return (
		<form autoComplete='off' onSubmit={handleSubmit}>
			<div>
				<label htmlFor='jobTitle'>Job Title</label>
				<input
					type='text'
					name='jobTitle'
					id='jobTitle'
					value={values.jobTitle}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.jobTitle && touched.jobTitle && <p>{errors.jobTitle}</p>}
			</div>
			<div>
				<label htmlFor='jobDescription'>Job Description</label>
				<input
					type='text'
					name='jobDescription'
					id='jobDescription'
					value={values.jobDescription}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.jobDescription && touched.jobDescription && (
					<p>{errors.jobDescription}</p>
				)}
			</div>
			<div>
				<label htmlFor='jobLocation'>Job Location</label>
				<input
					type='text'
					name='jobLocation'
					id='jobLocation'
					value={values.jobLocation}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.jobLocation && touched.jobLocation && (
					<p>{errors.jobLocation}</p>
				)}
			</div>
			<button
				onClick={() => {
					dispatch(setFormPage(1));
					dispatch(setJobDetails(values));
				}}
			>
				Previous
			</button>
			<button type='submit'>Next</button>
		</form>
	);
};

export default JobDetails;
