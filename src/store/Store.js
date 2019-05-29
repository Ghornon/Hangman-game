import React, { Component } from 'react';
import * as actions from '../actions/Actions';

const Context = React.createContext();

class StoreProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lives: 11,
			word: '',
			hash: new Array(11).fill(false),
			missed: [],
			gameover: false,
			loading: true
		};
	}

	createHash(word) {
		const length = word.length > this.state.lives ? word.length : this.state.lives;

		const newHash = new Array(length)
			.fill(false)
			.map((element, index) => index >= length - word.length);

		return newHash;
	}

	async fetchWord() {
		const token = await fetch('https://hangman-api.herokuapp.com/hangman', {
			method: 'POST'
		})
			.then(res => res.json())
			.then(res => res.token);

		const word = await fetch(`https://hangman-api.herokuapp.com/hangman?token=${token}`)
			.then(res => res.json())
			.then(res => res.solution.toUpperCase());

		return word;
	}

	startNewGame = async () => {
		this.setState({ ...this.state, loading: true });
		const word = await this.fetchWord();
		const hash = this.createHash(word);

		this.setState({ lives: 11, word, hash, missed: [], gameover: false, loading: false });
	};

	componentDidMount() {
		this.startNewGame();
	}

	componentDidUpdate() {
		const hashString = this.state.hash
			.filter(element => element.length === 1 && element.match(/[A-Z]/i))
			.join('');

		if (
			(this.state.lives <= 0 && !this.state.gameover) ||
			(hashString === this.state.word && !this.state.gameover)
		) {
			this.setState({ gameover: true });
		}
	}

	attacheMethods() {
		const newActions = {};

		for (let i in actions) {
			newActions[i] = actions[i].bind(this);
		}

		return newActions;
	}

	render() {
		const { children } = this.props;
		return (
			<Context.Provider
				value={{ ...this.attacheMethods(), ...this.state, startNewGame: this.startNewGame }}
			>
				{children}
			</Context.Provider>
		);
	}
}

const connectWithStore = Container => {
	return class extends Component {
		render() {
			return (
				<Context.Consumer>
					{context => <Container {...context} {...this.props} />}
				</Context.Consumer>
			);
		}
	};
};

export { StoreProvider, connectWithStore };
