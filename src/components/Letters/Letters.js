import React from 'react';
import { connectWithStore } from '../../store/Store';

import './Letters.scss';

const LettersUI = ({ hash }) => {
	const lettersList = [...hash].map((element, index) => {
		const letter = element || '';
		const active = element ? 'letters__list-item--active' : '';
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

const Letters = connectWithStore(LettersUI);
export default Letters;
