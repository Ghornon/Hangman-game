import React from 'react';
import { connectWithStore } from '../../store/Store';

import './Gameover.scss';

const GameOverUI = ({ startNewGame, lives, gameover }) => {
	const display = gameover ? 'flex' : 'none';
	const massage = lives > 0 ? 'You won!' : 'Game over';
	return (
		<section className="gameover" style={{ display: display }}>
			<header className="gameover__header">{massage}</header>
			<input
				type="button"
				className="gameover__btn"
				value="New word"
				onClick={startNewGame}
			/>
		</section>
	);
};

const GameOver = connectWithStore(GameOverUI);

export default GameOver;
