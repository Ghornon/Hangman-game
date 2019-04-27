import React from 'react';

import { Folk } from './Folk';
import { Letters } from './Letters';
import { Mistakes } from './Mistakes';

const Layout = () => {
	console.log('asd');
	return (
		<div className="container">
			<Folk lives="0" />
			<Mistakes letters={['v', 'b', 'p', 'g']} />
			<Letters letters={['a', 'l', 'a', null, 'm', 'a', null, 'k', false, 't', 'a']} />
		</div>
	);
};

export default Layout;
