class StoryApp extends React.Component {
  render() {
    return <div>Hello World React</div>;
  }
}

// ES2015
let output = document.getElementById("story-app");
ReactDOM.render(<StoryApp />, output);
