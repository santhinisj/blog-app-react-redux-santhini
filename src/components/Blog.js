import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllBlogs } from '../redux/action';

class Blog extends Component {
    componentDidMount() {
        console.log("inside fetch"); 
        // this.props.fetchAllBlogs();
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
                      <button 
                    onClick={()=>this.props.dispatch({type:'DELETEBLOG',blog})}>
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