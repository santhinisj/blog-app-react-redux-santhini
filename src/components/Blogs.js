import React, { Component } from 'react';
import '../App.css';
import blogs from '../redux/reducer';
import { connect } from 'react-redux';
import EditComponent from './EditComponent';

class Blogs extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         blog:[]
    //     }
    // }
    // componentWillMount(){
    //     console.log("1");
        
    //     console.log("Inside component will mount");
    //     console.log(this.props.id);
    //     fetch('/blogs/'+this.props.id)
    //     .then(response => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         this.setState({
    //         blog:data
    //     },() => {
    //         console.log(this.state.blog);})
    //     }
    //     )
    //     // 
    //         // this.props.dispatch({type:'GETBLOG',blog:data}));
    //     console.log("this.props.blogs after updation");
    //     console.log(this.state.blog);
    // }
    render(){
        // console.log(this.state.blog);
        let blogDescription ={title:'No blogs yet',message:''};
        // console.log(this.props.blogs)
        if(this.props.blogs.length===1){
            blogDescription.title=this.props.blogs[0].title;
            blogDescription.message=this.props.blogs[0].message;
        }
        let blog = this.props.blogs[0];
        // console.log(blog);  
        return(<div>
                <div key={blog.id}>
                    {blog.editing ? <EditComponent blog={blog} key={blog.id} /> :
                        <button onClick={()=>this.props.dispatch({type:'EDITBLOG',id:blog.id})}>>Edit</button>}
                </div>
               
            <h6>{blogDescription.title}</h6>
            <p>{blogDescription.message}</p>
            </div>);
    }
}
const mapStateToProps = (state,ownProps) => {
    // console.log(ownProps);
    // console.log(state)
    console.log("2");
    
    return {
        blogs: state.filter(blog=>blog.id==ownProps.match.params.id),
        id:ownProps.match.params.id
    }
}
export default connect(mapStateToProps)(Blogs);