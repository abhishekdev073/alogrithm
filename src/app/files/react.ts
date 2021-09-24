export const data = {
    "data": [
        {
            "question": "Lib",
            "responses": [{
                "value": "react.development.js,react-dom.development.js",
            }]
        },
        {
            "question": "Babel",
            "responses": [{
                "value": "used for jsx, Convert ES6 code,jsx code",
                desc: [
                    'npx babel --watch src --out-dir . --presets react-app/prod'
                ]
            }]
        },
        {
            "question": "JSX",
            "responses": [{
                "value": "Preprocessor like sass babel run it,JSX Prevents Injection Attacks",
            }]
        },
        {
            "question": "create the app with dependency",
            "responses": [{
                "value": "npm init react-app my-app,npx create-react-app my-app",
            }]
        },
        {
            "question": "Next.js",
            "responses": [{
                "value": "static and server‑rendered applications",
            }]
        },
        {
            "question": "Gatsby",
            "responses": [{
                "value": "pre-rendered HTML and CSS to guarantee the fastest load time",
            }]
        },
        {
            "question": "ReactDOM",
            "responses": [{
                "value": "ReactDOM.render(<h1>Hello, world!</h1>,document.getElementById('root'));",
            }]
        },
        {
            "question": "Props",
            "responses": [{
                "value": "Props are Read-Only,pass data to component",
            }]
        },
        {
            "question": "state",
            "responses": [{
                "value": " Only assign in constructor, this.setState({name: 'abhi'});",
                desc: [
                    '    Wrong =>  this.setState({  counter: this.state.counter + this.props.increment,});',
                    '    setState is asynch we might not get the correct state',
                    '    // Correct this.setState((state, props) => ({counter: state.counter + props.increment}));',
                    '    // correct => this.setState(function(state, props) {  return {counter: state.counter + props.increment }});',
                    '    We get last stage and props',
                ]
            }]
        },
        {
            "question": "setState",
            "responses": [{
                "value": "it merged the object ",
            }]
        },
        {
            "question": "function",
            "responses": [{
                "value": "state less",
            }]
        },
        {
            "question": "class",
            "responses": [{
                "value": "state",
            }]
        },
        {
            "question": "Lifecycle",
            "responses": [{
                "value": "use for to free up resources componentDidMount, componentWillUnmount",
            }]
        },
        {
            "question": "The Data Flows Down",
            "responses": [{
                "value": "component can pass it state to child as props",
            }]
        },
        {
            "question": "Event",
            "responses": [{
                desc: [
                    '   <button onClick={() => this.handleClick()}>Click me</button> // bad every time callback function get create',
                    '   <button onClick={() => this.handleClick.bind(this)}>Click me</button>           ',
                    '   <button onClick={() => this.handleClick}>Click me</button>  ',
                    '   // pass parameter ',
                    '    <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>',
                    '    <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>  ',
                ]
            }]
        },
        {
            "question": "Lists and Keys",
            "responses": [{
                desc: [
                    '  const numbers = [1, 2, 3, 4, 5];',
                    '  const listItems = numbers.map((number) =>',
                    '    <li key={number.toString()} >{number}</li>',
                    '  ); ',
                ]
            }]
        },
        {
            "question": "Form",
            "responses": [{
                "value": "Controlled Components : we update the value by self onChange= this.inputChange.bind(this) alternative is we can use formik lib",
            }]
        },
        {
            "question": "Lifting State Up",
            "responses": [{
                "value": "child share state to parent",
                desc: [
                    'We pass state from parent and one function child call this function and parent update the state'
                ]
            }]
        },
        {
            "question": "Composition",
            "responses": [{
                "value": "Combine component",
                desc: [
                    '// comp1 ',
                    '<div>',
                    '<Parent>I am parent content</Parent>',
                    '</div>',
                    '',
                    ' // comp2',
                    '<div>',
                    '<h1> I am going to render parent data as well<h1>',
                    ' {props.children}',
                    '</div>',
                    '',
                    '<SplitPane left={<Contacts />} right={<Chat />} />',
                    '',
                    '<div>Left {props.left}</div>',
                    '<div>{props.right}</div>',
                ]
            }]
        },
        {
            "question": "React.lazy",
            "responses": [{
                "value": "Load component at lazy",
                desc: [
                    '  const OtherComponent = React.lazy(() => import("./ OtherComponent"));',
                    '  <Suspense fallback={<div>Loading...</div>}>',
                    '     <OtherComponent />',
                    '   </Suspense>     ',
                    '',
                    '   show loading msg untill OtherComponent get loaded',
                ]
            }]
        },
        {
            "question": "Route",
            "responses": [{
                "value": "xxxxxxxxx",
                desc: [
                    '      import { BrowserRouter as Router, Route, Switch } from "react - router - dom";',
                    '      const Home = lazy(() => import("./routes/Home"));',
                    '      const About = lazy(() => import("./routes/About"));',
                    '',
                    '      const App = () => (',
                    '        <Router>',
                    '          <Suspense fallback={<div>Loading...</div>}>',
                    '            <Switch>',
                    '              <Route exact path="/" component={Home}/>',
                    '              <Route path="/about" component={About}/>',
                    '            </Switch>',
                    '          </Suspense>',
                    '        </Router>',
                    '      ); ',
                ]
            }]
        },
        {
            "question": "Context providers",
            "responses": [{
                "value": "To pass common data to all the nesting component use Context",
                desc: [
                    '   const ThemeContext = React.createContext("light");',
                    '   <ThemeContext.Provider value="I m data">',
                    '    <ThemeContext1.Provider value="I am data1">',
                    '      <Toolbar />',
                    '    </ThemeContext1.Provider>',
                    '    </ThemeContext.Provider>',
                    '',
                    '      <ThemeContext.Consumer>',
                    '   {data => (',
                    '     <ThemeContext1.Consumer>',
                    '       {data1 => (',
                    '         <div>',
                    '           {data1}-{data}',
                    '         </div>',
                    '       )}',
                    '     </ThemeContext1.Consumer>',
                    '   )}',
                    ' </ThemeContext.Consumer>',
                    '  always pass value as state',
                ]
            }]
        },
        {
            "question": "ErrorBoundary",
            "responses": [{
                "value": "handle the error in its child component",
                desc: [
                    'componentDidCatch hanlde the error '
                ]
            }]
        },
        {
            "question": "Forwarding Refs",
            "responses": [{
                "value": "pass ref to access child component from parent",
            }]
        },
        {
            "question": "fragments",
            "responses": [{
                "value": "like ng-template  :- used for grouping",
            }]
        },
        {
            "question": "Higher-Order Components",
            "responses": [{
                "value": "takes component return new component, such as Redux’s connect",
                desc: [

                ]
            }]
        },
        {
            "question": "Jquery",
            "responses": [{
                "value": "can be used",
            }]
        },
        {
            "question": "Optimizing Performance",
            "responses": [{
                "value": "Production Build,React Developer Tools for Chrome.",
            }]
        },
        {
            "question": "Portals",
            "responses": [{
                "value": "render children into a DOM node that exists outside the DOM hierarchy of the parent component.        ",
                desc: [

                ]
            }]
        },
        {
            "question": "Profiler",
            "responses": [{
                "value": "measures how often a React application renders and what the “cost” of rendering is",
            }]
        },
        {
            "question": "Refs and the DOM",
            "responses": [{
                "value": "access DOM nodes or React elements created in the render method.",
                desc: [
                    ' this.myRef = React.createRef();',
                    ' this.myRef.current.focus();',
                    ' used for auto focus and trigger',
                ]
            }]
        },
        {
            "question": "PropTypes",
            "responses": [{
                "value": "its like defined moldel interface  can add validator",
            }]
        },
        {
            "question": "Hooks",
            "responses": [{
                "value": "you use state and other React features without writing a class",
                desc: [
                    '  import React, { useState } from "react";',
                    '  const [count, setCount] = useState(0);',
                    '  <button onClick={() => setCount(count + 1)}>',
                    '  Hooks don’t work inside classes ',
                    '  useEffect :- same as componentDidMount',
                ]
            }]
        }
        

    ]
}