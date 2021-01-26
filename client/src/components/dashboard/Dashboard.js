import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
/**
 * Layout
 */
import NavBar from './../layout/NavBar';


const Dashboard = ({
    getCurrentProfile,
    auth: { user },
    profile: { profile, loading },
}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);
    return loading && profile === null ? (
        <Spinner />
    ) : (
            <>
                <NavBar />
                <h1 >Dashboard</h1>
                <p className='lead'>
                    Welcome {user && user.name}
                </p>
                {profile !== null ? (
                    <DashboardActions />
                ) : (
                        <>
                            <p>Please set up your profile</p>
                            <Link to='/create-profile' className='btn btn-primary my-1'>
                                Create Profile
                    </Link>
                        </>
                    )}
            </>
        );
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
