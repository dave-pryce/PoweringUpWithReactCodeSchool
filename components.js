class StoryApp extends React.Component {
  render() {
    return <div>Hello World React</div>;
  }
}

// ES2015
let output = document.getElementByID("story-app");
ReactDom.render(<StoryApp />, output);

// Standard Javascript
//ReactDom.render("<StoryApp />", document.getElementByID('story-app'));
