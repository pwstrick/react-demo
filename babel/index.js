'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_Component) {
    _inherits(Search, _Component);

    //static defaultProps = {
    //    url: "http://jane.com"
    //};
    function Search(props) {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

        _this.state = {
            txt: "请输入关键字"
        };
        //this.setState({
        //    txt: "React"
        //});
        //console.log(this.state.txt);
        return _this;
    }

    _createClass(Search, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.log("component will mount");
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            console.log("component did mount");
            this.refs.txt.addEventListener("blur", function (e) {
                _this2.getValue(e);
            });
            console.log(this.refs);
        }
    }, {
        key: 'handle',
        value: function handle(keyword, e) {
            console.log(keyword);
            console.log(this);
            console.log(this.select.value);
        }
    }, {
        key: 'getValue',
        value: function getValue(e) {
            console.log(e.target.value);
        }
    }, {
        key: 'refresh',
        value: function refresh(e) {
            this.setState({
                type: e.target.value
            });
        }
        //handle1(e) {
        //    console.log(this);
        //}
        //handle2 = (e) => {
        //    console.log(this);
        //};

    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            console.log("render");
            var type = this.state.type;

            console.log(type);
            return _react2.default.createElement(
                'div',
                null,
                this.props.children,
                _react2.default.createElement(
                    'select',
                    { value: type, onChange: this.refresh.bind(this) },
                    _react2.default.createElement(
                        'option',
                        { value: '1' },
                        '\u6807\u9898'
                    ),
                    _react2.default.createElement(
                        'option',
                        { value: '2' },
                        '\u5185\u5BB9'
                    )
                ),
                _react2.default.createElement(
                    'select',
                    { defaultValue: 2, ref: function ref(select) {
                            return _this3.select = select;
                        } },
                    _react2.default.createElement(
                        'option',
                        { value: '1' },
                        '\u6807\u9898'
                    ),
                    _react2.default.createElement(
                        'option',
                        { value: '2' },
                        '\u5185\u5BB9'
                    )
                ),
                _react2.default.createElement('input', { placeholder: this.state.txt, ref: 'txt', defaultValue: '\u6559\u7A0B', style: { marginLeft: 10, textAlign: "center" } }),
                _react2.default.createElement(
                    'button',
                    { className: 'btn', 'data-url': this.props.url, onClick: this.handle.bind(this, "REACT") },
                    "<搜索>"
                )
            );
        }
    }]);

    return Search;
}(_react.Component);

Search.defaultProps = {
    url: "http://jane.com"
};
_reactDom2.default.render(_react2.default.createElement(
    Search,
    { url: 'http://www.pwstrick.com' },
    _react2.default.createElement(
        'h1',
        null,
        'React\u626B\u76F2\u6559\u7A0B'
    )
), document.getElementById("container"));

//方式一
//class Grandpa extends Component {
//    //约定好的方法
//    getChildContext() {
//        return { name: "strick" };
//    }
//    render() {
//        return (<Son />);
//    }
//}
//Grandpa.childContextTypes = {
//    name: PropTypes.string
//};
//class Son extends Component {
//    render() {
//        return (<Grandson />);
//    }
//}
//class Grandson extends Component {
//    render() {
//        let { name } = this.context;
//        return (<div>爷爷叫{name}</div>);
//    }
//}
//Grandson.contextTypes = {
//    name: PropTypes.string
//};

//方式二
var NameContext = _react2.default.createContext({ name: name });

var Grandpa = function (_Component2) {
    _inherits(Grandpa, _Component2);

    function Grandpa() {
        _classCallCheck(this, Grandpa);

        return _possibleConstructorReturn(this, (Grandpa.__proto__ || Object.getPrototypeOf(Grandpa)).apply(this, arguments));
    }

    _createClass(Grandpa, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                NameContext.Provider,
                { value: { name: "strick" } },
                _react2.default.createElement(Son, null)
            );
        }
    }]);

    return Grandpa;
}(_react.Component);

var Son = function (_Component3) {
    _inherits(Son, _Component3);

    function Son() {
        _classCallCheck(this, Son);

        return _possibleConstructorReturn(this, (Son.__proto__ || Object.getPrototypeOf(Son)).apply(this, arguments));
    }

    _createClass(Son, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(Grandson, null);
        }
    }]);

    return Son;
}(_react.Component);

var Grandson = function (_Component4) {
    _inherits(Grandson, _Component4);

    function Grandson() {
        _classCallCheck(this, Grandson);

        return _possibleConstructorReturn(this, (Grandson.__proto__ || Object.getPrototypeOf(Grandson)).apply(this, arguments));
    }

    _createClass(Grandson, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                NameContext.Consumer,
                null,
                function (context) {
                    return _react2.default.createElement(
                        'div',
                        null,
                        '\u7237\u7237\u53EB',
                        context.name
                    );
                }
            );
        }
    }]);

    return Grandson;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(Grandpa, null), document.getElementById("context"));

var Button = function (_Component5) {
    _inherits(Button, _Component5);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'button',
                    null,
                    this.props.txt
                )
            );
        }
    }]);

    return Button;
}(_react.Component);
//高阶组件


function HOC(Mine) {
    var Wrapped = function (_Component6) {
        _inherits(Wrapped, _Component6);

        function Wrapped() {
            _classCallCheck(this, Wrapped);

            var _this8 = _possibleConstructorReturn(this, (Wrapped.__proto__ || Object.getPrototypeOf(Wrapped)).call(this));

            _this8.state = {
                txt: "提交"
            };
            return _this8;
        }

        _createClass(Wrapped, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(Mine, this.state);
            }
        }]);

        return Wrapped;
    }(_react.Component);

    return Wrapped;
}
var Wrapped = HOC(Button);
_reactDom2.default.render(_react2.default.createElement(Wrapped, null), document.getElementById("context"));