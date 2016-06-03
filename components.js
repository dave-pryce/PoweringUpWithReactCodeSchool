class StoryApp extends React.Component {
  render() {
    const topics = ["Angular", "React", "Firebase", "HMTL"];
    return <div className='test'>
    <h3>Hello World React</h3>
    <ul>
    {topics.map( topic => <li>{topic}</li>)}
    </ul>
    </div>;
  }
}

// ES2015
let output = document.getElementById("story-app");
ReactDOM.render(<StoryApp />, output);
