import React, { Component } from 'react';

import svg from '../../assets/images/keyboard-solid.svg';
import './Keyboard.scss';
import { connectWithStore } from '../../store/Store';

class KeyboardUI extends Component {
	constructor(props) {
		super(props);

		this.state = {
			key: ''
		};
	}

	handleKeyPress = event => {
		const letter = event.key;
		const { checkLetter, gameover } = this.props;
		const isLetter = /[A-Za-z]/;
		if (isLetter.exec(letter) && !gameover) {
			checkLetter(letter.toUpperCase());
		}
	};

	handleRetinaKeyPress = event => {
		const letter = event.target.value[event.target.value.length - 1];
		this.setState({ key: letter });
		this.handleKeyPress({ key: letter });
	};

	componentDidMount() {
		window.addEventListener('keypress', this.handleKeyPress);
	}

	componentWillUnmount() {
		window.removeEventListener('keypress', this.handleKeyPress);
	}

	render() {
		return (
			<section className="keyboard">
				<input
					type="text"
					id="keyboard__textbox"
					name="keyboard__textbox"
					className="keyboard__textbox"
					onChange={this.handleRetinaKeyPress}
					value={this.state.key}
				/>

				<label htmlFor="keyboard__textbox" className="keyboard__label">
					<img src={svg} alt="keyboard icon" />
				</label>
			</section>
		);
	}
}

const Keyboard = connectWithStore(KeyboardUI);
export default Keyboard;
