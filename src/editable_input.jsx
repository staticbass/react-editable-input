
import React from 'react';

class EditableInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            loading: false
        };
        this.toggleEdit = this.toggleEdit.bind(this);
        this.onSave = this.onSave.bind(this);
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
            input.value = this.props.text;
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


    render() {
        const props = this.props;
        const { edit, loading } = this.state;
        return (
            <div className="editable-input-component">

                <form>
                    <div type={props.inputType}
                         onClick={this.toggleEdit}
                         style={{display: edit ? 'none' : 'block'}}
                         className={props.textClassName}>{props.text}</div>

                    <div style={{display: edit ? 'block' : 'none'}}>

                        <input ref="input" type="text" className={props.inputClassName} readOnly={loading}/>

                        <button disabled={loading} onClick={this.onSave} type="submit" className={props.btnClassName}>{props.btnTitle}</button>
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
    onSave: React.PropTypes.func.isRequired,
    text: React.PropTypes.string.isRequired
};

export default EditableInput;