import React from 'react';

import './Mistakes.scss';

const Mistakes = ({ letters }) => {
	const lettersList = [...letters].map((element, index) => (
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

export default Mistakes;
