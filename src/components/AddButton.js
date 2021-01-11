import React from 'react';
import { connect } from 'react-redux';
import { addList, addCard } from '../actions';

const styles = {
    textarea: {
        resize: 'none',
        width: 'calc(100% - 6px)',
        outline: 'none',
        minHeight: '100px',
        padding: '5px',
    },
};
class AddButton extends React.Component {
    state = {
        formOpen: false,
        text: '',
    };

    handleInputChange = (e) => {
        this.setState({ text: e.target.value });
    };

    closeForm = () => {
        this.setState({ formOpen: false });
    };

    openForm = () => {
        this.setState({ formOpen: true });
    };

    renderForm = () => {
        const { list } = this.props;

        const placeholder = list
            ? 'Enter title for your new list'
            : 'Enter content for new card';
        const buttonText = list ? 'Add List' : 'Add Card';
        //@todo autosize textarea
        return (
            <div>
                <p onClick={this.closeForm}>- close form</p>
                <textarea
                    style={styles.textarea}
                    placeholder={placeholder}
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleInputChange}
                />
                {this.state.formOpen ? (
                    //@ onMouseDown fires before onBlurFunction  :-)
                    <button
                        onMouseDown={
                            list ? this.handleAddList : this.handleAddCard
                        }
                    >
                        {buttonText}
                    </button>
                ) : (
                    ''
                )}
            </div>
        );
    };

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;
        console.log(this.props.dispatch);
        if (text) {
            this.setState({ text: '' });
            dispatch(addList(text));
        }
        return;
    };

    handleAddCard = () => {
        console.log(this.props);
        const { dispatch, listID } = this.props;
        const { text } = this.state;
        console.log(this.props.dispatch);
        if (text) {
            this.setState({ text: '' });
            dispatch(addCard(listID, text));
        }
        return;
    };

    renderAddButton = () => {
        const { list } = this.props;
        const buttonText = list ? 'Add another list' : 'Add another card';
        return <div onClick={this.openForm}>+ Add another {buttonText}</div>;
    };

    render() {
        return (
            <div>
                {this.state.formOpen
                    ? this.renderForm()
                    : this.renderAddButton()}
            </div>
        );
    }
}

export default connect()(AddButton);
