# React-editable-input

Editable input for React.js

### Install

```sh
$ npm i -S react-editable-input
```

### Example

```javascript
import EditableInput from 'react-editable-input';

// or var EditableInput = require('react-editable-input').default;

class ExampleComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      text: 'admin'
    }
  }
  
  onSave(value) {
    this.setState({ text: value });
  }
  
  render() {
    return (
      <div className="example">
      
        <EditableInput onSave={this.onSave.bind(this)} text={this.state.text} />
        
      </div>  
    )
  }
}

ReactDOM.render(<ExampleComponent />, document.getElementById('app'));
```

### Props

**onSave** <br>
Function that called when user clicks submit button. (required)

**text** <br>
String that is displayed. (required)

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

Add default styles in your ``index.html``.
```html
<link rel="stylesheet" href="../node_modules/react-editable-input/editable_input.css">
```
