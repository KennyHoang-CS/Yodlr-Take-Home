import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import userContext from '../Context/userContext';

function RegisterForm() {
    
    // Initial register form state with empty inputs. 
    const INITIAL_STATE = {
        firstName: '',
        lastName: '',
        email: ''
    };

    // The state to hold user form data. 
    const [userFormData, setUserFormData] = useState(INITIAL_STATE);
    // The state to handle the errors. 
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    // Create a history object, so we can go back to home page via signing up / update. 
    const history = useHistory();

    const { register } = useContext(userContext);

    // Needed to change the state of form data. 
    function handleChange(e) {
        const { name, value } = e.target;
        setUserFormData(userFormData => ({
            ...userFormData,
            [name]: value
        }))
    }

    // Handle form submission whether its signing up or updating profile. 
    async function handleSubmit(e) {
        e.preventDefault();
        register(userFormData);
        history.push('/');  
    }

    return (
        
        <div className="Form-Container">
            <h2>Sign Up</h2>
            <form className="Form" onSubmit={handleSubmit}>
                <div className="inputs-container">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        value={userFormData.firstName}
                    />
                    
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        value={userFormData.lastName}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={userFormData.email}
                    />
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;