import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import PropTypes from 'prop-types';
import CardForm from '../styles/CardForm.styles'

const AddCard = ({ addCard, listID }) => {
    console.log(listID)
    const initialState = {
        formOpen: false,
        title: 'g',
        text: 'g',
        listID: listID
    };

    const [formData, setFormData] = useState({
        initialState
    });



    const closeForm = () => {
        setFormData({ formOpen: false });
    };

    const openForm = () => {
        console.log("open")
        setFormData({ formOpen: true });
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const renderForm = () => {

        // TODO autosize textarea

        return (
            <div className="Card__input" >
                <p className="Card__closeButton" onClick={closeForm}>- close form</p>
                <input
                    name="title"
                    autoFocus
                    value={formData.title}
                    placeholder="Enter a Title"
                    onChange={(e) => handleInputChange(e)} type="text" />
                <textarea
                    name="text"
                    placeholder="Text"
                    value={formData.text}
                    onChange={(e) => handleInputChange(e)}
                />
                {formData.formOpen ? (
                    //@ onMouseDown fires before onBlurFunction  :-)
                    <input type="submit"
                        onMouseDown={handleAddCard} value="Add Card" />

                ) : ('')}
            </div>
        );
    };



    const handleAddCard = () => {
        if (formData) {
            console.log(formData)
            addCard(listID, formData);
            closeForm();
        }
        return;
    };

    const renderAddButton = () => {

        return <div className="Card__addButton" onClick={openForm}>+ Add another Card</div>;
    };


    return (
        <CardForm>
            {formData.formOpen
                ? renderForm()
                : renderAddButton()}
        </CardForm>
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
