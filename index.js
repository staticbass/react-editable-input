(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["EditableInput"] = factory(require("react"));
	else
		root["EditableInput"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EditableInput = function (_React$Component) {
	    _inherits(EditableInput, _React$Component);

	    function EditableInput(props) {
	        _classCallCheck(this, EditableInput);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EditableInput).call(this, props));

	        _this.state = {
	            edit: false,
	            loading: false
	        };
	        _this.toggleEdit = _this.toggleEdit.bind(_this);
	        _this.onSave = _this.onSave.bind(_this);
	        return _this;
	    }

	    _createClass(EditableInput, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps() {
	            if (this.state.loading) {
	                this.setState({ loading: false });
	                this.toggleEdit();
	            }
	        }
	    }, {
	        key: 'toggleEdit',
	        value: function toggleEdit() {
	            var _this2 = this;

	            var edit = !this.state.edit;
	            this.setState({ edit: edit });
	            if (edit) {
	                (function () {
	                    var input = _this2.refs.input;

	                    input.value = _this2.props.text;
	                    setTimeout(function () {
	                        return input.focus();
	                    }, 0);
	                })();
	            }
	        }
	    }, {
	        key: 'onSave',
	        value: function onSave(e) {
	            var _this3 = this;

	            e.preventDefault();

	            var val = this.refs.input.value;
	            this.setState({ loading: true }, function () {
	                _this3.props.onSave(val);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = this.props;
	            var _state = this.state;
	            var edit = _state.edit;
	            var loading = _state.loading;

	            return _react2.default.createElement(
	                'div',
	                { className: 'editable-input-component' },
	                _react2.default.createElement(
	                    'form',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { type: props.inputType,
	                            onClick: this.toggleEdit,
	                            style: { display: edit ? 'none' : 'block' },
	                            className: props.textClassName },
	                        props.text
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { style: { display: edit ? 'block' : 'none' } },
	                        _react2.default.createElement('input', { ref: 'input', type: 'text', className: props.inputClassName, readOnly: loading }),
	                        _react2.default.createElement(
	                            'button',
	                            { disabled: loading, onClick: this.onSave, type: 'submit', className: props.btnClassName },
	                            props.btnTitle
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return EditableInput;
	}(_react2.default.Component);

	EditableInput.defaultProps = {
	    textClassName: 'editable-input-text',
	    inputClassName: 'editable-input',
	    btnClassName: 'editable-input-submit',
	    btnTitle: 'Ok',
	    inputType: 'text'
	};

	EditableInput.propTypes = {
	    onSave: _react2.default.PropTypes.func.isRequired,
	    text: _react2.default.PropTypes.string.isRequired
	};

	exports.default = EditableInput;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;