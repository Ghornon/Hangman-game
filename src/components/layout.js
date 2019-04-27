import React from 'react';

import { Folk } from './Folk';
import { Letters } from './Letters';

const Layout = () => {
	console.log('asd');
	return (
		<div className="container">
			<Folk lives="0" />
			<Letters letters={['a', 'l', 'a', null, 'm', 'a', null, 'k', false, 't', 'a']} />
		</div>
	);
};

export default Layout;
