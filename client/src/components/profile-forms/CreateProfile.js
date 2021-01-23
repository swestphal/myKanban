import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions';
const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        bio: '',

    });

    const [socialInputs, toggleSocialInputs] = useState(false);

    const {
        company,
        website,
        location,
        status,
        bio
    } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        createProfile(formData, history);
    };
    return (
        <>
            <h1 className='large text-primary'>Create Your Profile</h1>
            <p className='lead'>
                <i className='fas fa-user'></i> Let's get some information to
                make your profile stand out
            </p>
            <small>* = required field</small>
            <form className='form' onSubmit={(e) => onSubmit(e)}>
                <div className='form-group'>
                    <select
                        name='status'
                        value={status}
                        onChange={(e) => onChange(e)}
                    >
                        <option value='0'>* Select Professional Status</option>
                        <option value='Forever Free'>Forever Free</option>
                        <option value='Silver'>
                            Silver
                        </option>
                        <option value='Gold'>
                            Gold
                        </option>
                    </select>
                    <small className='form-text'>
                        Your Membership
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Company'
                        name='company'
                        value={company}
                        onChange={(e) => onChange(e)}
                    />
                    <small className='form-text'>
                        Could be your own company or one you work for
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Website'
                        name='website'
                        value={website}
                        onChange={(e) => onChange(e)}
                    />
                    <small className='form-text'>
                        Could be your own or a company website
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Location'
                        name='location'
                        value={location}
                        onChange={(e) => onChange(e)}
                    />
                    <small className='form-text'>
                        City & state suggested (eg. Boston, MA)
                    </small>
                </div>

                <div className='form-group'>
                    <textarea
                        placeholder='A short bio of yourself'
                        name='bio'
                        value={bio}
                        onChange={(e) => onChange(e)}
                    ></textarea>
                    <small className='form-text'>
                        Tell us a little about yourself
                    </small>
                </div>
                <button type='submit' className='btn btn-primary my-1'>
                    Submit
                </button>
                <a className='btn btn-light my-1' href='/dashboard.html'>
                    Go Back
                </a>
            </form>
        </>
    );
};

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
