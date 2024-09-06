import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import { 
    FormikAbstractation, 
    FormikBasicPage, 
    FormikComponents, 
    FormikYupPage, 
    RegisterPage } from "../03-forms/pages"

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
            <nav>
                <img src={logo} alt="React Logo" />

                <ul>
                    <li>
                        <NavLink to="/register" className={ ({isActive}) => isActive ? 'nav-active' : ''} >Register Page</NavLink>
                    </li>

                    <li>
                        <NavLink to="/formik-basic" className={ ({isActive}) => isActive ? 'nav-active' : ''} >Formik Basic</NavLink>
                    </li>

                    <li>
                        <NavLink to="/formik-yup" className={ ({isActive}) => isActive ? 'nav-active' : ''} >Formik Yup</NavLink>
                    </li>

                    <li>
                        <NavLink to="/formik-components" className={ ({isActive}) => isActive ? 'nav-active' : ''} >Formik Components</NavLink>
                    </li>

                    <li>
                        <NavLink to="/formik-abstractation" className={ ({isActive}) => isActive ? 'nav-active' : ''} >Formik Abstractation</NavLink>
                    </li>

                    <li>
                        <NavLink to="/users" className={ ({isActive}) => isActive ? 'nav-active' : ''} >Users</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/formik-basic" element={ <FormikBasicPage /> } />
                <Route path="/formik-yup" element={ <FormikYupPage /> } />
                <Route path="/formik-components" element={ <FormikComponents /> } />
                <Route path="/formik-abstractation" element={ <FormikAbstractation /> } />
                <Route path="/users" element={ <h1>Users Page</h1> } />
                <Route path="/register" element={ <RegisterPage /> } />
                <Route path="/*" element={ <Navigate to="/home" replace /> } />
            </Routes>
      </div>
    </BrowserRouter>
  )
}
