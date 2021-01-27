import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addList } from '../actions';
import PropTypes from 'prop-types';
import ListForm from '../styles/ListForm.styles'

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
            <div className="List__input">
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
                    <input type="submit" value="Add List"
                        onMouseDown={handleAddList}>
                    </input>
                ) : ('')}
            </div>
        );
    };

    const handleAddList = () => {
        if (formData.title) {

            addList(formData.title);
            closeForm();
        }
        return;
    };


    const renderAddButton = () => {
        return <div className="List__addButton" onClick={openForm}>+ Add another List</div>;
    };

    return (
        <ListForm>
            {formData.formOpen
                ? renderForm()
                : renderAddButton()}
        </ListForm>
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
