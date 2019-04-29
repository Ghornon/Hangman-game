import React from 'react';
import { StoreProvider } from '../store/Store';

import { Folk } from './Folk';
import { Letters } from './Letters';
import { Mistakes } from './Mistakes';
import { Keyboard } from './Keyboard';
import { GameOver } from './GameOver';

const Layout = () => {
	return (
		<StoreProvider>
			<div className="container">
				<Folk />
				<Mistakes />
				<Letters />
				<Keyboard />
			</div>
			<GameOver />
		</StoreProvider>
	);
};

export default Layout;
