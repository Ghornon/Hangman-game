import React from 'react';
import { connectWithStore } from '../../store/Store';

import './Folk.scss';

const FolkUI = ({ lives }) => {
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
		.filter((element, index, arr) => lives < arr.length - index)
		.map((element, index) => <div className={element} key={`folk-${element}-${index}`} />);

	return <section className="folk">{folkProgress}</section>;
};

const Folk = connectWithStore(FolkUI);
export default Folk;
