import React, {Component} from 'react';
import './App.css';
import BlogPost from './components/BlogPost';
import blogPosts from './data'

class App extends Component {
  state = {
    blogName: 'My Great Blog',
    blogPosts: blogPosts,
  };

  onNewComment = (comment, index) => {
    console.log(comment);
    console.log(index);
    const newState = this.state;
    newState.blogPosts[index].comments.push(comment);
    this.setState(newState);
  };

  render() {
    console.log('App: Render');
    const elements = this.state.blogPosts.map((item, key) => <BlogPost
        key={key}
        title={item.title}
        text={item.text}
        image={item.image}
        comments={item.comments}
        index={key}
        onNewComment={this.onNewComment}
    />);
    return (
        <div className="App">
          <h1>{this.state.blogName}</h1>
          {elements}
        </div>
    );
  }
}

export default App;
