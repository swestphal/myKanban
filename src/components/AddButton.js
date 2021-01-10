import React from 'react';

class AddButton extends React.Component {
    state = { formOpen: false };

    toggleForm = () => {
        this.setState({ formOpen: !this.state.formOpen });
    };
    renderForm = () => {
        return (
            <div>
                <span onClick={this.toggleForm}>- close form</span>
                <p>hello i'm the form</p>
            </div>
        );
    };

    renderAddButton = () => {
        const { list } = this.props;
        const buttonText = list ? 'Add another list' : 'Add another card';
        return <div onClick={this.toggleForm}>+ Add another {buttonText}</div>;
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
