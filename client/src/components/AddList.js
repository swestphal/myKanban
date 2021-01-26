import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addList } from '../actions';
import PropTypes from 'prop-types';

const styles = {
    textarea: {
        resize: 'none',
        width: 'calc(100% - 6px)',
        outline: 'none',
        minHeight: '100px',
        padding: '5px',
    },
};


const AddList = ({ title, addList }) => {
    const initialState = {
        formOpen: false,
        title: ''
    }

    const [formData, setFormData] = useState({
        initialState
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, title: e.target.value });
    };

    const closeForm = () => {
        setFormData({ formOpen: false });
    };

    const openForm = () => {
        console.log("open")
        setFormData({ formOpen: true });
    };


    // TODO autosize textarea

    const renderForm = () => {
        return (
            <div>
                <p onClick={closeForm}>- close form</p>

                <textarea
                    name="title"
                    style={styles.textarea}
                    placeholder="Title"
                    autoFocus
                    onBlur={closeForm}
                    value={formData.title}
                    onChange={(e) => handleInputChange(e)}
                />
                {formData.formOpen ? (
                    //@ onMouseDown fires before onBlurFunction  :-)
                    <button
                        onMouseDown={handleAddList}>
                        Add List
                    </button>
                ) : ('')}
            </div>
        );
    };

    const handleAddList = () => {
        if (formData.title) {
            console.log(FormData)
            addList(formData.title);
        }
        return;
    };


    const renderAddButton = () => {
        return <div onClick={openForm}>+ Add another List</div>;
    };

    return (
        <div>
            {formData.formOpen
                ? renderForm()
                : renderAddButton()}
        </div>
    );
}

AddList.propTypes = {
    addList: PropTypes.func.isRequired,
    title: PropTypes.object,
}
const mapStateToProps = (state) => ({
    title: state.title,
});

export default connect(mapStateToProps, { addList })(AddList);
