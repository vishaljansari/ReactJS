const React = require("react")
require("./css/additem.css")
const AddItem = React.createClass({

    render: function() {

        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" required ref="newitem" />
                <input type="submit" value = "submit" />
            </form>

        )
    },

    //custom functions

     handleSubmit : function(e){
         e.preventDefault();
        this.props.onAdd(this.refs.newitem.value)

     }
})

module.exports = AddItem