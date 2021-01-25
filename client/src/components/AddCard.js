import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions';
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
const AddCard = ({ addCard, listID }) => {
    console.log(listID)
    const initialState = {
        formOpen: false,
        title: '',
        text: '',
        listID: listID
    };

    const [formData, setFormData] = useState({
        initialState
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const closeForm = () => {
        setFormData({ formOpen: false });
    };

    const openForm = () => {
        console.log("open")
        setFormData({ formOpen: true });
    };



    const renderForm = () => {

        // TODO autosize textarea

        return (
            <div>
                <p onClick={closeForm}>- close form</p>
                <input placeholder="Enter a Title" name="title" autoFocus value={formData.title}
                    onChange={(e) => handleInputChange(e)} type="title" />
                <textarea
                    name="text"
                    style={styles.textarea}
                    placeholder="Text"
                    autoFocus

                    value={formData.text}
                    onChange={(e) => handleInputChange(e)}
                />
                {formData.formOpen ? (
                    //@ onMouseDown fires before onBlurFunction  :-)
                    <button
                        onMouseDown={handleAddCard}>
                        Add Card
                    </button>
                ) : ('')}
            </div>
        );
    };



    const handleAddCard = () => {
        if (formData) {
            console.log(formData)
            addCard(listID, formData);
        }
        return;
    };

    const renderAddButton = () => {

        return <div onClick={openForm}>+ Add another Card</div>;
    };


    return (
        <div>
            {formData.formOpen
                ? renderForm()
                : renderAddButton()}
        </div>
    );

}

AddCard.propTypes = {
    addCard: PropTypes.func.isRequired,
    formData: PropTypes.object,

}
const mapStateToProps = (state) => ({
    formData: state.formData,
});

export default connect(mapStateToProps, { addCard })(AddCard);
