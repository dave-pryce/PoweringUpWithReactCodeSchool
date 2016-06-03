class CommentBox extends React.Component {
  render() {
    const topics = ["Angular", "React", "Firebase", "HMTL"];
    return
    <div>
    <h1 className='test'>Hello World React</h1>
    <ul>
    {topics.map( topic => <li>{topic}</li>)}
    </ul>
    <h3>Comments</h3>
      <Comment author="DP" body="Yeah"/>
      <Comment author="AB" body="Oh Yeah"/>
    </div>;
  }
}


class Comment extends React.Component {
  render() {
   return
    <div>
    <p className='body'>{this.props.author}</p>
    <p className='body'>{this.props.body}</p>
    </div>;
  }
}

// ES2015
let output = document.getElementById("comment-box");
ReactDOM.render(<CommentBox />, output);
