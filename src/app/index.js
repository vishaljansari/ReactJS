const React = require("react")
const ReactDom = require("react-dom")
require("./css/index.css")

// Create Component

const TodoItem = require("./todoitem")

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
         <p>The busiest people have the most leisure....</p>
         <ul>
             {todos}            
        </ul>
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
    }
});

// Crete Todo Item Component


// Put component into html page

ReactDom.render(< TodoComponent />, document.getElementById("todo-wrapper"));
