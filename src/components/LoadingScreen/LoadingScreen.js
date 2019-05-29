import React from 'react';
import { connectWithStore } from '../../store/Store';
import { GridLoader } from 'react-spinners';

import './LoadingScreen.scss';

const LoadingScreenUI = ({ startNewGame, lives, gameover, loading }) => {
	const display = gameover ? 'flex' : 'none';
	let massage = lives > 0 ? 'You won!' : 'Game over';

	if (loading) {
		return (
			<section className="gameover" style={{ display: display }}>
				<GridLoader size={15} color={'#fff'} />
			</section>
		);
	}

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

const LoadingScreen = connectWithStore(LoadingScreenUI);

export default LoadingScreen;
