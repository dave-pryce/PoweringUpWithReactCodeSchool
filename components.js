
// comment Box componenet
class CommentBox extends React.Component {
  render() {
    const comments = this._getComments();
    return(
    <div className="comment-box">
    <Header />
      <div className ="comment-list">
      <h4>{comments.length} Comments</h4>
      {comments}
      </div>
      <CommentForm />
    </div>
  );
  }

// get comments _ for custom
  _getComments(){
    const commentList = [
      {id:1, author: "Dan Pringle", body: "Angular is cool" },
      {id:2, author: "Jonny Appleseed", body: "React is awesome"},
      {id:3, author: "Mandy Moon", body:"Firebase oh year"},
      {id:4, author: "Sammy Smith", body:"Components Rock"}
    ];

    return commentList.map((comment) => {
      return (
        <Comment
        author={comment.author}
        body={comment.body}
        key={comment.id}
        />
      );
    });
  }

}


// Comment Component
class Comment extends React.Component {

  constructor(){
    super();
    this.state = {
      isAbusive: false
    };
  }


  render() {

    let commentBody;

    if (this.state.isAbusive){
      commentBody = <em>Abusive Content</em>
      } else {
      commentBody = this.props.body;
    }

   return(
  <div>
  <p className='comment'>{this.props.author} says: {commentBody}</p>
  <button className="buttonAbuse" onClick={this._toggleAbuse.bind(this)}>Mark as Abusive</button>
  </div>
  );
  }

_toggleAbuse(event) {
  event.preventDefault();

  this.setState({
    isAbusive: !this.state.isAbusive
  });
}

}




// Comment form
class CommentForm extends React.Component {
  render () {
    return (
      <form className = "comment-form">
      <h3>New Comment</h3>
      <input placeholder="Name:" ref={input => this.author = input}/>
      <textarea
        placeholder="Comment:"
        ref={textarea => this._body = textarea}>
      </textarea>
      </form>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.addComment(this._author.value, this._body.value);
    this._author.value = '';
    this._body.value = '';
  }

}




// Header Components
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


// ES2015
let output = document.getElementById("comment-box");
ReactDOM.render(<CommentBox />, output);
