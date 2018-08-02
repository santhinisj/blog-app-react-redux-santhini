import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllBlogs } from '../redux/action';
import blogs from '../redux/reducer';

class Blog extends Component {
    componentDidMount() {
        console.log("inside fetch"); 
        fetch('/blog')
        .then(response => response.json())
        .then(data => this.props.dispatch({
            type:'GETALLBLOGS',blog:data}));
    }
    handleClick=(blog)=>{
        // preventDefault();
        console.log(blog.id);
        this.props.dispatch({type:'DELETEBLOG',blog});
        fetch('/blog/'+blog.id,
        {
            method: "DELETE"
           
            })
            .then(response => response.json())
            .then(data => console.log(data));
    }

    render() {
        return (
            <div>
                <h1>All Blogs</h1>
                {console.log(this.props.blogs)}
                {this.props.blogs.map((blog) => 
                 (
                    <div className="eachPost">  
                      <Link to={`/blogs/${blog.id}`}><p className="eachBlog">{blog.title}</p></Link>
                      <button onClick={()=>this.handleClick(blog)}>
                    REMOVE</button>
                    </div>
                  )
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        blogs: state
    }
}
export default connect(mapStateToProps)(Blog);