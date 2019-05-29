import React from 'react';
import { StoreProvider } from '../store/Store';

import { Folk } from './Folk';
import { Letters } from './Letters';
import { Mistakes } from './Mistakes';
import { Keyboard } from './Keyboard';
import { LoadingScreen } from './LoadingScreen';

const Layout = () => {
	return (
		<StoreProvider>
			<div className="container">
				<Folk />
				<Mistakes />
				<Letters />
				<Keyboard />
			</div>
			<LoadingScreen />
		</StoreProvider>
	);
};

export default Layout;
