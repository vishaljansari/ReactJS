const React = require("react")
require("./css/todoitem.css")


const TodoItem = React.createClass({

    render:function() {
        return (
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete" onClick={this.handleDelete}> X </span>
                    </div>
            </li>
        )
    },
    handleDelete:function() {
      this.props.onDelete(this.props.item)
    }
    
})

module.exports = TodoItem

