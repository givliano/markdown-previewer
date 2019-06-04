import React from 'react';
import './App.css';
const marked = require('marked');
// Set options
// `highlight` example uses `highlight.js`
marked.setOptions({
  renderer: new marked.Renderer(),
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

class App extends React.Component {
  state = {text: "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHere's some code,`<div></div>`,between 2 backticks.\n```\n// this is multi-line code: \n\nfunction anotherExample(firstLine, lastLine) {\n if (firstLine == '```' && lastLine == '```'){\n    return multiLineCode;\n }\n}\n\`\`\`\n\nYou can also make text **bold**... whoa!\nOr _italic_.Or... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~. \nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes! \n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n - Some are bulleted.\n    - With different indentation levels.\n      - That look like this.\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)",
    markdown: ''
  };

  componentDidMount = () => {
    const markdown = marked(this.state.text);
    this.setState({ markdown });
  }

  handleChange = (e) => {
    const text = e.target.value;
    const markdown = marked(text);
    this.setState({ text });
    this.setState({ markdown });
    this.htmlValueHandler();
  }

  htmlValueHandler = () => {
    const preview = document.getElementById('preview');
    return preview.innerHTML = this.state.markdown;
  }

  render() {
    
    return (
      <div className="container">
        <div className="edit">
          <h2>Markdown Editor</h2>
          <form>
            <textarea 
              id="editor" 
              value={this.state.text}
              onChange={this.handleChange}
            ></textarea>
          </form>
        </div>
        <div className="previewer">        
          <h2>HTML Previewer</h2>
          <form>
            <div 
              contentEditable="true"
              id="preview"
              dangerouslySetInnerHTML={{__html: this.state.markdown}}
            ></div>
          </form>
        </div>
      </div>
    );
  };
};

export default App;
