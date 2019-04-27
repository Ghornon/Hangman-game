import React from 'react';

import './Letters.scss';

const Letters = ({ letters }) => {
	const lettersList = [...letters].map((element, index) => {
		const letter = element || '';
		const active = element !== null ? 'letters__list-item--active' : '';
		return (
			<li className={`letters__list-item ${active}`} key={`letters-item-${index}`}>
				{letter}
			</li>
		);
	});

	return (
		<section className="letters">
			<ul className="letters__list">{lettersList}</ul>
		</section>
	);
};

export default Letters;
