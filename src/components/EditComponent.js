import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newTitle = this.getTitle.value;
  const newMessage = this.getMessage.value;
  const data = {
    newTitle,
    newMessage
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.blog.id, data: data })
  fetch('/blogs/'+this.props.blog.id,
        {
            method: "PUT",
            body: JSON.stringify({ data: data }),
            headers: {
                "Content-Type": "application/json"
            }
           
            })
            .then(response => response.json())
            .then(data => console.log(data));
    }
render() {
return (
<div>
  <form onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.blog.title} placeholder="Enter Blog Title" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getMessage = input}
    defaultValue={this.props.blog.message} cols="28" placeholder="Enter Description" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);