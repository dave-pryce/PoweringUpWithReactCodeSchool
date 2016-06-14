/////// Comment Box component
class CommentBox extends React.Component {
  constructor(){
    super();

    this.state = {
      showComments: false,
      comments: []
  };
}

    render() {
      const comments = this._getComments();
      return(<div className="comment-box">
             <Header />
             <div className ="comment-list">
             <h4>{comments.length} Comments</h4>
             {comments}
             </div>
             <CommentForm addComment={this._addComment.bind(this)}/>
             </div>);
           }

                          // get comments _ for custom
                            _getComments(){
                              return this.state.comments.map((comment) => {
                                return (<Comment
                                  author={comment.author}
                                  body={comment.body}
                                  key={comment.id}
                                  />);
                              });
                            }

                          // add comments
                          _addComment(commentAuthor, commentBody){
                                  let comment = {
                                    id: this.state.comments.length + 1,
                                    author: commentAuthor,
                                    body: commentBody
                                  };

                            this.setState({
                              comments: this.state.comments.concat([comment])
                            });
                          }


                          _fetchComments() {
                        $.ajax({
                          method: 'GET',
                          url: 'comments.json',
                          success: (comments) => this.setState({comments})
                        });
                      }

                      componentWillMount() {
                        this._fetchComments();
                      }

}
///// Comment End



//// Comment Component
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

   return(<div>
          <p className='comment'>{this.props.author} says: {commentBody}</p>
          <button className="buttonAbuse" onClick={this._toggleAbuse.bind(this)}>Mark as Abusive</button>
          </div>);
  }

                              _toggleAbuse(event) {
                                event.preventDefault();
                                this.setState({
                                isAbusive: !this.state.isAbusive
                              });
                              }
}
///// Comment Component end




/////// Comment form
class CommentForm extends React.Component {
  render () {
    return (
      <form className = "comment-form" onSubmit={this._handleSubmit.bind(this)}>
      <h3>New Comment</h3>
      <input placeholder="Name:" ref={input => this._author = input}/>
      <textarea
        placeholder="Comment:"
        ref={textarea => this._body = textarea}>
      </textarea>
      <button type="submit" className="buttonSubmit">Add Comment</button>
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
//////// Comment form end




///// Header Components
class Header extends React.Component {
  render() {
    return(
      <div className="header">
      <h1 className="header">Hello World in React</h1>
      </div>
    );
  }
}


// ES2015
let output = document.getElementById("comment-box");
ReactDOM.render(<CommentBox />, output);
