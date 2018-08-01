import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter,Link } from 'react-router-dom';
import { saveBlog } from '../redux/action';


class New extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message =  this.getMessage.value;
        const blog = {
          id: Date.now(),
          title,
          message,
          editing:false
        }
        console.log("handlesubmit");
        
        this.props.dispatch({
          type:'ADDBLOG',
          blog});
      //   // this.props.saveBlog(blog);
      // //   console.log(blog);
        // fetch("/", {
        //   method: "POST",
        //   body: JSON.stringify({ data: blog }),
        //   headers: {
        //       "Content-Type": "application/json"
        //   }
      // })
      // .then(response => response.json())
      // .then(body => console.log(body))
      this.getTitle.value = '';
      this.getMessage.value = '';
      }
    render() {
    return (
    <div>
      <h1>Create Blog Post</h1>
      <form onSubmit={this.handleSubmit}>
       <input required type="text" ref={(input)=>this.getTitle = input} 
        placeholder="Enter blog title!"/>
       <br /><br />
       <textarea required rows="5" ref={(input)=>this.getMessage = input} cols="28" 
        placeholder="Enter blog description!" />
       <br /><br />
       <button onClick={this.handleSubmit}>Post</button>
      </form>
    </div>
    );
    }
}

export default connect()(New);