import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Search extends Component {
    //static defaultProps = {
    //    url: "http://jane.com"
    //};
    constructor(props) {
        super(props);
        this.state = {
            txt: "请输入关键字"
        };
        //this.setState({
        //    txt: "React"
        //});
        //console.log(this.state.txt);
    }
    componentWillMount() {
        console.log("component will mount");
    }
    componentDidMount() {
        console.log("component did mount");
        this.refs.txt.addEventListener("blur", (e) => {
            this.getValue(e);
        });
        console.log(this.refs)
    }
    handle(keyword, e) {
        console.log(keyword);
        console.log(this);
        console.log(this.select.value);
    }
    getValue(e) {
        console.log(e.target.value);
    }
    refresh(e) {
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
    render() {
        console.log("render");
        let {type} = this.state;
        console.log(type);
        return (
            <div>
                {this.props.children}
                <select value={type} onChange={this.refresh.bind(this)}>
                    <option value="1">标题</option>
                    <option value="2">内容</option>
                </select>
                <select defaultValue={2} ref={(select) => this.select = select}>
                    <option value="1">标题</option>
                    <option value="2">内容</option>
                </select>
                <input placeholder={this.state.txt} ref="txt" defaultValue="教程" style={{marginLeft:10, textAlign:"center"}}/>
                <button className="btn" data-url={this.props.url} onClick={this.handle.bind(this, "REACT")}>{"<搜索>"}</button>
            </div>
        );
    }
}
Search.defaultProps = {
    url: "http://jane.com"
};
ReactDOM.render(
    <Search url="http://www.pwstrick.com">
        <h1>React扫盲教程</h1>
    </Search>,
    document.getElementById("container")
);

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
let NameContext = React.createContext({ name });
class Grandpa extends Component {
    render() {
        return (
            <NameContext.Provider value={{name: "strick"}}>
                <Son />
            </NameContext.Provider>
        );
    }
}
class Son extends Component {
    render() {
        return (<Grandson />);
    }
}
class Grandson extends Component {
    render() {
        return (
            <NameContext.Consumer>
                {(context) => (
                    <div>爷爷叫{context.name}</div>
                )}
            </NameContext.Consumer>
        );
    }
}

ReactDOM.render(
    <Grandpa />,
    document.getElementById("context")
);


class Button extends Component {
    render() {
        return (
            <div>
                <button>{ this.props.txt }</button>
            </div>
        );
    }
}
//高阶组件
function HOC(Mine) {
    class Wrapped extends Component {
        constructor() {
            super();
            this.state = {
              txt: "提交"
            };
        }
        render() {
            return <Mine {...this.state} />;
        }
    }
    return Wrapped;
}
let Wrapped = HOC(Button);
ReactDOM.render(
    <Wrapped />,
    document.getElementById("context")
);