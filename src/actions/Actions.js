function getAllIndexes(arr, val) {
	const indexes = [];

	for (let i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);

	return indexes;
}

function checkLetter(letter) {
	const indexes = getAllIndexes(this.state.word, letter);

	if (indexes !== undefined && indexes.length > 0) {
		this.setState({
			...this.state,
			hash: [...this.state.hash].map((currentLetter, currentIndex, arr) => {
				const result = indexes.find(
					newLetterIndex =>
						currentIndex === arr.length - this.state.word.length + newLetterIndex
				);

				if (result !== undefined) return letter;

				return currentLetter;
			})
		});
	} else {
		const isInMissed = [...this.state.missed].find(element => element === letter);

		if (!isInMissed) {
			this.setState({
				...this.state,
				lives: this.state.lives - 1,
				missed: [...this.state.missed, letter]
			});
		}
	}
}

export { checkLetter };
