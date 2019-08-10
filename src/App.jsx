import React from 'react';
import './App.css';
import marked from 'marked';

// INSERTS target="_blank" INTO HREF TAGS
const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
	return `<a target="_blank" href="${href}">${text}</a>`;
};

//   Allows line breaks with return
marked.setOptions({
	breaks: true
});

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: placeholder
		};
		this.handleInput = this.handleInput.bind(this);
	}
	handleInput(event) {
		this.setState({
			input: event.target.value,
			markup: marked(event.target.value)
		});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Textbox handleInput={this.handleInput} input={this.state.input} />
					<Preview input={this.state.input} />
				</header>
			</div>
		);
	}
}

const Textbox = (props) => {
	return (
		<div id="editor-area">
			<textarea name="" id="editor" cols="80" rows="10" onChange={props.handleInput} value={props.input} />
		</div>
	);
};

const Preview = (props) => {
	return (
		<div id="preview-area">
			<div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.input, { renderer: renderer }) }} />
		</div>
	);
};

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export default App;
