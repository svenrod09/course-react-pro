import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string()
                .required('Required.')
                .max(15, 'Must be 15 characters or less.'),
            lastName: Yup.string()
                .required('Rrequired.')
                .max(10, 'Must be 10 characters or less.'),
            email: Yup.string()
                .email('Invalid email address.')
                .required('Required.')
        })
    })

  return (
    <div>
        <h1>Formik Components</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
            onSubmit={ (values) => {
                console.log(values);
            }}
            validationSchema={
                Yup.object().shape({
                    firstName: Yup.string()
                        .required('Required.')
                        .max(15, 'Must be 15 characters or less.'),
                    lastName: Yup.string()
                        .required('Required.')
                        .max(10, 'Must be 10 characters or less.'),
                    email: Yup.string()
                        .email('Invalid email address.')
                        .required('Required.'),
                    terms: Yup.boolean()
                        .oneOf([true], 'You must accept the terms and conditions.'),
                    jobType: Yup.string()
                        .notOneOf(['it-jr'], 'Invalid option.')
                        .required('Required.')
                })
            }
        >

            { formik => (
                <Form>
                    <label htmlFor='firstName'>First Name</label>
                    <Field name='firstName' type='text' placeholder='First Name' />
                    <ErrorMessage name='firstName' component='span' />
        
                    <label htmlFor='lastName'>Last Name</label>
                    <Field name='lastName' type='text' />
                    <ErrorMessage name='lastName' component='span' />
        
                    <label htmlFor='email'>Email</label>
                    <Field name='email' type='text' />
                    <ErrorMessage name='email' component='span' />

                    <label htmlFor='jobType'>Job Type</label>
                    <Field name='jobType' as='select'>
                        <option value=''>Select your job type</option>
                        <option value='developer'>Developer</option>
                        <option value='desginer'>Designer</option>
                        <option value='it-senior'>IT Senior</option>
                        <option value='it-jr'>IT Jr.</option>
                    </Field>
                    <ErrorMessage name='jobType' component='span' />

                    <label>
                        <Field name='terms' type='checkbox' />
                        Terms and conditions
                    </label>
                    <ErrorMessage name='terms' component='span' />
        
                    <button type='submit'>Submit</button>
                </Form>
            )}

        </Formik>
    </div>
  )
}
