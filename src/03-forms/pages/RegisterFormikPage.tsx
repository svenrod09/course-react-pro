import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

  return (
    <div>
        <h1>Register Formik Page</h1>

        <Formik
            initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: '',
            }}
            onSubmit={ (values) => {
                console.log(values);
            }}
            validationSchema={ Yup.object().shape({
                name: Yup.string()
                    .min(2, 'El nombre debe contener al menos 2 caracteres.')
                    .min(2, 'El nombre debe contener menos de 15 caracteres.')
                    .required('Requerido.'),
                email: Yup.string()
                    .email('Revise el formato del correo.')
                    .required('Requerido.'),
                password1: Yup.string()
                    .min(6, 'Debe contener al menos 6 caracteres.')
                    .required('Requerido.'),
                password2: Yup.string()
                    .oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden.')
                    .required('Requerido.')
            })}
        >
            { ({ handleReset }) => (
                <Form>
                    <MyTextInput
                        label='Nombre'
                        name='name'
                        placeholder='Sven'
                    />

                    <MyTextInput
                        label='Email'
                        name='email'
                        type='email'
                        placeholder='johndoe@gmail.com'
                    />

                    <MyTextInput
                        label='Password'
                        name='password1'
                        type='password'
                        placeholder='******'
                    />

                    <MyTextInput
                        label='Confirm Password'
                        name='password2'
                        type='password'
                        placeholder='******'
                    />

                    <button type="submit">Create</button>

                    <button type="button" onClick={handleReset}>Reset Form</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}
