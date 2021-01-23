import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions';

const initialState = {
    company: '',
    website: '',
    location: '',
    status: '',
    bio: ''
}
const ProfileForm = ({
    profile: { profile, loading },
    createProfile,
    getCurrentProfile,
    history,
}) => {
    const [formData, setFormData] = useState({
        initialState
    });

    useEffect(() => {
        if (!profile) getCurrentProfile();
        if (!loading && profile) {

            const profileData = { ...initialState };
            for (const key in profile) {
                if (key in profileData) profileData[key] = profile[key];
            }

            setFormData(profileData);
        }
    }, [loading, getCurrentProfile, profile])

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
        createProfile(formData, history, profile ? true : false);
    };
    return (
        <>
            <h1 className='large text-primary'>Create Your Profile</h1>
            <p className='lead'>
                <i className='fas fa-user'></i> Let's get some information and let your teammembers know who you are
            </p>
            <small>* = required field</small>
            <form className='form' onSubmit={(e) => onSubmit(e)}>
                <div className='form-group'>
                    <select
                        name='status'
                        value={status}
                        onChange={(e) => onChange(e)}
                    >
                        <option value='0'>Select Color Scheme</option>
                        <option value='dark'>Dark</option>
                        <option value='bright'>
                            Bright
                        </option>
                    </select>
                    <small className='form-text'>
                        Your Color Scheme
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

ProfileForm.propTypes = {
    createProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
    profile: state.profile,
});

export default connect(
    mapStateToProps,
    { createProfile, getCurrentProfile })
    (ProfileForm);
