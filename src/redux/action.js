// actions 
const handleResponse=(response) =>{
    if (response.ok) {
      return response.json();
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
export function getBlogs(blogs) {
    return {
      type: 'GETALLBLOGS',
      blogs
    }
  }
  
  export function addBlog(blog) {
    return {
      type: 'ADDBLOG',
      blog
    }
  }
  
  export function getBlog(blog) {
    return {
      type: 'GETBLOG',
      blog
    }
  }
  
  export function blogUpdate(blog) {
    return {
      type: 'UPDATEBLOG',
      blog
    }
  }
  
  export function saveBlog(data) {
    return dispatch => {
      return fetch('/', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response =>( response.json()))
      .then(data => dispatch(addBlog(data.blog)));
    }
  }
  
  export function updateBlog(data) {
    return dispatch => {
      return fetch(`/api/blogs/${data._id}`, {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(handleResponse)
      .then(data => dispatch(blogUpdate(data.blog)));
    }
  }
  
  export function fetchAllBlogs() {
    return dispatch => {
      fetch('/blog')
        .then(res => res.json())
        .then(data => dispatch(getBlogs(data.blogs)));
    }
  }
  
  export function fetchBlog(id) {
    return dispatch => {
      fetch(`/blogs/${id}`)
        .then(res => res.json())
        .then(data => dispatch(getBlog(data.blog)));
    }
  }