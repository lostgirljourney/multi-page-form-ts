import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { requisitionSchema } from '../validations';
import { RootState } from '../store';
import { setFormPage, setRequisitionDetails } from '../store/slice/formSlice';

const RequisitionDetails = () => {
	const { requisitionDetails } = useSelector((state: RootState) => state.form);
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
		initialValues: { ...requisitionDetails },
		validationSchema: requisitionSchema,
		onSubmit: async (values) => {
			console.log(values);
			dispatch(setRequisitionDetails(values));
			await new Promise((r) => setTimeout(r, 2000));
			dispatch(setFormPage(2));
			resetForm({ values: { ...requisitionDetails } });
		}
	});

	return (
		<form autoComplete='off' onSubmit={handleSubmit}>
			<div>
				<label htmlFor='requestTitle'>Request Title</label>
				<input
					type='text'
					name='requestTitle'
					id='requestTitle'
					value={values.requestTitle}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.requestTitle && touched.requestTitle && (
					<p>{errors.requestTitle}</p>
				)}
			</div>
			<div>
				<label htmlFor='owner'>Owner</label>
				<input
					type='text'
					name='owner'
					id='owner'
					value={values.owner}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.owner && touched.owner && <p>{errors.owner}</p>}
			</div>
			<div>
				<label htmlFor='hiringManager'>Hiring Manager</label>
				<input
					type='text'
					name='hiringManager'
					id='hiringManager'
					value={values.hiringManager}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.hiringManager && touched.hiringManager && (
					<p>{errors.hiringManager}</p>
				)}
			</div>
			<div>
				<label htmlFor='openings'>Openings</label>
				<input
					type='number'
					min={1}
					max={9999}
					name='openings'
					id='openings'
					value={values.openings}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.openings && touched.openings && <p>{errors.openings}</p>}
			</div>
			<div>
				<label htmlFor='urgency'>Urgency</label>
				<select
					name='urgency'
					id='urgency'
					value={values.urgency}
					onChange={handleChange}
					onBlur={handleBlur}
				>
					<option value='Select urgency' disabled>
						Select urgency
					</option>
					<option value='Low'>Low</option>
					<option value='Medium'>Medium</option>
					<option value='High'>High</option>
				</select>
				{errors.urgency && touched.urgency && <p>{errors.urgency}</p>}
			</div>
			<div>
				<label htmlFor='employmentType'>Employment Type</label>
				<input
					type='text'
					name='employmentType'
					id='employmentType'
					value={values.employmentType}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.employmentType && touched.employmentType && (
					<p>{errors.employmentType}</p>
				)}
			</div>
			<button disabled>Previous</button>
			<button type='submit'>Next</button>
		</form>
	);
};

export default RequisitionDetails;
