const React = require("react")
const ReactDom = require("react-dom")
require("./css/index.css")


import {Router,Route,browserHistory, Link} from 'react-router'


const TodoItem = require("./todoitem")
const AddItem = require("./additem")
const About = require("./about")

const App = React.createClass({
    render:function(){
        return(
            <Router history={browserHistory}>
                <Route path={"/"} component={TodoComponent}></Route>
                <Route path={"/about"} component={About}></Route>
            </Router>
        )
    }
})

const TodoComponent = React.createClass({

 getInitialState: function() {

    return {

        todos: ["hello, Vishal", "Eat that cheese", "bye bye LA.","I am coming to TORONTO"]
    
    }
},
    render: function () {

     let todos = this.state.todos;
     todos = todos.map(function(item, index){

        return (
            <TodoItem item={item} key={index} onDelete={this.onDelete} />
        )
     }.bind(this))

        return ( 
        <div id="todo-list" >
            <Link to={'/about'}>About</Link>
         <p>The busiest people have the most leisure....</p>
         <ul>
             {todos}            
        </ul>
        <AddItem onAdd={this.onAdd} />
            </div>
        );
    },


    onDelete:function(item) {

        let updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val 
        })

        this.setState({
            todos : updatedTodos
        })
    },
    onAdd:function(item) {
        let updatedTodos = this.state.todos
        updatedTodos.push(item)
        this.setState({
            todos : updatedTodos
        })

    },

    // LifeCycle functions

    componentWillMount:function(){
        console.log("componentWillMount")
    },
        componentDidMount:function(){
        console.log("componentDidMount")
        // any grabbing of external data
    },
        componentWillUpdate:function(){
        console.log("componentWillUpdate")
    }
});

// Crete Todo Item Component


// Put component into html page

ReactDom.render(< App />, document.getElementById("todo-wrapper"));
