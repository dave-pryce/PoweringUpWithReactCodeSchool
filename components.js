class CommentBox extends React.Component {
  render() {
    return(
    <div className="comment-box">
    <Header />
    <h3>Comments</h3>
      <Comment author="Dan Pringle" body="Angular is cool"/>
      <Comment author="Jonny Appleseed" body="React is awesome"/>
      <Comment author="Mandy Moon" body="Firebase oh year"/>
    </div>
  );

  }
}


class Header extends React.Component {
  render() {
    const topics = ["Angular", "React", "Firebase"];
    return(
      <div className="header">
      <h1 className="header">Hello World in React</h1>
      <h3>Topics Being Discussed</h3>
      <ul>
      {topics.map( topic => <li>{topic}</li>)}
      </ul>
      </div>
    );
  }
}


class Comment extends React.Component {
  render() {
   return(
  <div>
  <p className='comment'>{this.props.author} says: {this.props.body}</p>
  </div>
  );
  }
}

// ES2015
let output = document.getElementById("comment-box");
ReactDOM.render(<CommentBox />, output);
