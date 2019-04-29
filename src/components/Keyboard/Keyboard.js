import React, { Component } from 'react';

import svg from '../../assets/images/keyboard-solid.svg';
import './Keyboard.scss';
import { connectWithStore } from '../../store/Store';

class KeyboardUI extends Component {
	constructor(props) {
		super(props);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	handleKeyPress(letter) {
		const { checkLetter, gameover } = this.props;
		const isLetter = /[A-Za-z]/;
		if (isLetter.exec(letter) && !gameover) {
			checkLetter(letter.toUpperCase());
		}
	}

	componentDidMount() {
		this.keypressEvent = window.addEventListener('keypress', event => {
			this.handleKeyPress(event.key);
		});
	}

	componentWillUnmount() {
		window.removeEventListener(this.keypressEvent);
	}

	render() {
		return (
			<section className="keyboard">
				<input
					type="text"
					id="keyboard__textbox"
					name="keyboard__textbox"
					className="keyboard__textbox"
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
