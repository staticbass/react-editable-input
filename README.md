# React-editable-input

Editable input for React.js

### Install

```sh
$ npm i -S react-editable-input
```

### Example

![alt tag](http://s16.postimg.org/oq5d2dktx/edtiable_input.png)

```javascript
import EditableInput from 'react-editable-input';

// old style
var EditableInput = require('react-editable-input').default;

class ExampleComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      text: 'admin'
    };
    this.onSave = this.onSave.bind(this);
  }
  
  onSave(value) {
    this.setState({ text: value });
  }
  
  render() {
    return (
      <div className="example">
      
        <EditableInput onSave={this.onSave} text={this.state.text} />
        
        // with bootstrap
        <div className="form-inline">
            <EditableInput
                text={this.state.text}
                btnClassName="btn btn-default"
                inputClassName="form-control"
                onSave={this.onSave} />
        </div>
        
        // stateless
        <EditableInput text='stateless' />
        
      </div>  
    )
  }
}

ReactDOM.render(<ExampleComponent />, document.getElementById('app'));
```
**If prop ``onSave`` is not passed component is considered to be stateless.**

### Props

**text** <br>
String that is displayed. (required)

**onSave** <br>
Function that is called when user clicks submit button. First argument is a new value. Use this function to handle state change.

**textClassName** <br>
``ClassName`` prop of text element. Default ``editable-input-text``

**inputClassName** <br>
``ClassName`` prop of input element. Default ``editable-input``

**btnClassName** <br>
``ClassName`` prop of submit button element. Default ``editable-input-submit``

**btnTitle** <br>
Text inside submit button element. Default ``Ok``

**inputType** <br>
Type of input elemet. Default ``text``

### Styles

Add styles in your ``index.html``.
```html
<link rel="stylesheet" href="../node_modules/react-editable-input/editable_input.css">
```
