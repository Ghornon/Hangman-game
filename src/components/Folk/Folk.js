import React from 'react';

import './Folk.scss';

const Folk = ({ lives }) => {
	const folkProgress = [
		'folk__bar',
		'folk__head',
		'folk__neck',
		'folk__corpus',
		'folk__arm folk__arm--right',
		'folk__arm folk__arm--left',
		'folk__hand folk__hand--right',
		'folk__hand folk__hand--left',
		'folk__leg folk__leg--right',
		'folk__leg folk__leg--left',
		'folk__foot folk__foot--right',
		'folk__foot folk__foot--left'
	]
		.reverse()
		.map((element, index) => {
			if (lives <= index) return <div className={element} key={`folk-${element}-${index}`} />;
		})
		.reverse();

	return <section className="folk">{folkProgress}</section>;
};

export default Folk;
