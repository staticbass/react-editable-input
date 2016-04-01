
import React from 'react';

class EditableInput extends React.Component {

    constructor(props) {
        super(props);

        let state = { edit: false };

        this.props.onSave ?
            (state = Object.assign(state, { loading: false })) :
            (state = Object.assign(state, { text: this.props.text }));

        this.state = state;

        this.toggleEdit = this.toggleEdit.bind(this);
        this.onSave = this.onSave.bind(this);
        this.changeText = this.changeText.bind(this);
    }

    componentWillReceiveProps() {
        if(this.state.loading) {
            this.setState({ loading: false });
            this.toggleEdit();
        }
    }

    toggleEdit() {
        let edit = !this.state.edit;
        this.setState({ edit });
        if(edit) {
            const { input } = this.refs;
            input.value = this.props.onSave ? this.props.text : this.state.text;
            setTimeout(() => input.focus(), 0);
        }
    }

    onSave(e) {
        e.preventDefault();

        const val = this.refs.input.value;
        this.setState({ loading: true }, () => {
            this.props.onSave(val);
        });
    }

    changeText(e) {
        e.preventDefault();

        const text = this.refs.input.value;
        this.setState({ text });
        this.toggleEdit();
    }


    render() {
        const props = this.props;
        const { edit, loading, text } = this.state;
        const stateless = !!this.props.onSave;
        return (
            <div className="editable-input-component">

                <form>
                    <div ref="text"
                         type={props.inputType}
                         onClick={this.toggleEdit}
                         style={{display: edit ? 'none' : 'block'}}
                         className={props.textClassName}>{stateless ? props.text : text}</div>

                    <div style={{display: edit ? 'block' : 'none'}}>

                        <input ref="input" type="text" className={props.inputClassName} readOnly={loading}/>

                        <button disabled={loading} onClick={stateless ? this.onSave : this.changeText} type="submit" className={props.btnClassName}>{props.btnTitle}</button>
                    </div>
                </form>

            </div>
        )
    }

}

EditableInput.defaultProps = {
    textClassName: 'editable-input-text',
    inputClassName: 'editable-input',
    btnClassName: 'editable-input-submit',
    btnTitle: 'Ok',
    inputType: 'text'
};

EditableInput.propTypes = {
    onSave: React.PropTypes.func,
    text: React.PropTypes.string.isRequired
};

export default EditableInput;