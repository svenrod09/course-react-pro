import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

import { MyCheckbox, MySelect, MyTextInput } from '../components';

export const FormikAbstractation = () => {

  return (
    <div>
        <h1>Formik Abstractation</h1>

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
                    <MyTextInput 
                        label='First Name' 
                        name='firstName'
                        placeholder='Sven' 
                    />
                            
                    <MyTextInput 
                        label='Last Name' 
                        name='lastName'
                        placeholder='Rodriguez' 
                    />
        
                    <MyTextInput 
                        label='Email' 
                        name='email'
                        placeholder='john@example.com'
                        type='email' 
                    />

                    <MySelect label='Job Type' name='jobType' as='select'>
                        <option value=''>Select your job type</option>
                        <option value='developer'>Developer</option>
                        <option value='desginer'>Designer</option>
                        <option value='it-senior'>IT Senior</option>
                        <option value='it-jr'>IT Jr.</option>
                    </MySelect>

                    <MyCheckbox label='Terms & Conditions' name='terms' />
        
                    <button type='submit'>Submit</button>
                </Form>
            )}

        </Formik>
    </div>
  )
}
