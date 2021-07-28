// const isUnique = (word) => {
// 	const wordArray = word.split('');
// 	const wordSet = new Set([...wordArray]);
// 	console.log(wordArray, wordSet)
// 	console.log(wordSet.size === wordArray.length)
// 	return wordSet.size === wordArray.length ? true : false;
// }

// isUnique('asgggggwsgwgwgwgwgwgvg');

const isPermutation = (str1, str2) => {
	let str1Length = str1.length;
	let str2Length = str2.length;

	let str1Array = str1.split('').sort();
	let str2Array = str2.split('').sort();

	console.log(str1Array, str2Array);

	let permute = true;

	for (let i=0; i<str1Length; i++) {
		if (str1Array[i] !== str2Array[i]) {
			permute = false;
			return;
		}
	}
	console.log(permute)
	return permute;
}

isPermutation('asdfasdf', 'fdasfdsa')