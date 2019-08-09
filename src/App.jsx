import React from 'react';
import './App.css';
import marked from 'marked';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			markup: ''
		};
		this.handleInput = this.handleInput.bind(this);
		this.renderMarkup = this.renderMarkup.bind(this);
	}

	handleInput(event) {
		this.setState({ input: event.target.value });
		this.renderMarkup();
	}

	renderMarkup() {
		this.setState({ markup: marked(this.state.input) });
	}

	render() {
		const markup = this.state.markup;
		return (
			<div className="App">
				<header className="App-header">
					<div id="editor-area">
						<textarea
							name=""
							id="editor"
							cols="30"
							rows="10"
							onChange={this.handleInput}
							value={this.state.input}
						/>
					</div>
					<div id="preview-area">
						<div id="preview">{markup}</div>
					</div>
				</header>
			</div>
		);
	}
}

export default App;
