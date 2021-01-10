import React from 'react';

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
                {this.state.formOpen ? <button>{buttonText}</button> : ''}
            </div>
        );
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

export default AddButton;
