import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions';
import PropTypes from 'prop-types';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { name, email, password, password2 } = formData;
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        login(email, password);
    };

    // redirect if logged in

    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }
    return (
        <section className='container'>
            <h1 className='large text-primary'>Sign In</h1>
            <p className='lead'>
                <i className='fas fa-user'></i> Sing Into Your Account
            </p>
            <form
                className='form'
                action='create-profile.html'
                onSubmit={(e) => onSubmit(e)}
            >
                <div className='form-group'>
                    <input
                        type='email'
                        placeholder='Email Address'
                        required
                        name='email'
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        required
                        minLength='6'
                        onChange={(e) => onChange(e)}
                    />
                </div>

                <input
                    type='submit'
                    className='btn btn-primary'
                    value='Register'
                />
            </form>
            <p className='my-1'>
                Don't have an account? <Link to='/register'>Sign Up</Link>
            </p>
        </section>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
