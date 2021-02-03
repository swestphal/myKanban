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


const AddList = ({ list_title, addList, lists }) => {
    // find highest order number of list



    const initialState = {
        formOpen: false,
        list_title: '',
        order: 0
    }

    const [formData, setFormData] = useState({
        initialState
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, list_title: e.target.value });
    };

    const closeForm = () => {
        setFormData({ formOpen: false });
    };

    const openForm = () => {
        setFormData({ formOpen: true });
    };


    // TODO autosize textarea

    const renderForm = () => {
        return (
            <div className="List__input">
                <p onClick={closeForm}>- close form</p>

                <textarea
                    name="list_title"
                    style={styles.textarea}
                    placeholder="Title"
                    autoFocus
                    onBlur={closeForm}
                    value={formData.list_title}
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
        if (formData.list_title) {

            const highest = (lists.lists).reduce((highVal, currVal) => {
                if (currVal.order > highVal.order) return currVal;
                else return highVal
            })

            addList(formData.list_title, highest.order + 10);
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
    list_title: PropTypes.object,
}
const mapStateToProps = (state) => ({
    list_title: state.list_title,
    lists: state.lists
});

export default connect(mapStateToProps, { addList })(AddList);
