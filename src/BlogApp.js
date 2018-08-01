import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Blog from './components/Blog';
import Blogs from './components/Blogs';
import New from './components/New';
import './App.css';

class BlogApp extends Component {
  render() {  
    return (
     <BrowserRouter>
       <div>
           <Navigation />
           <Switch>
             <Route path="/" component={New} exact />
             <Route path="/blog" component={Blog} />
             <Route path="/blogs/:id" component={Blogs} />
             <Route component={Error} />
           </Switch>
       </div>
     </BrowserRouter>
   );
  }
}

export default BlogApp;
