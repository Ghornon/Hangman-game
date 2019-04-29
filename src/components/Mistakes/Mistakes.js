import React from 'react';
import { connectWithStore } from '../../store/Store';

import './Mistakes.scss';

const MistakesUI = ({ missed }) => {
	const lettersList = [...missed].map((element, index) => (
		<li className="mistakes__list-item" key={`mistakes-item-${index}`}>
			{element}
		</li>
	));

	return (
		<section className="mistakes">
			<header className="mistakes__header">You missed:</header>
			<ul className="mistakes__list">{lettersList}</ul>
		</section>
	);
};

const Mistakes = connectWithStore(MistakesUI);

export default Mistakes;
