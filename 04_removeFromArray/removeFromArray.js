const removeFromArray = function(ls, ...toRemove) {
	let res = [];
	ls.forEach(item => {
		if (!toRemove.includes(item)) {
			res.push(item);
		}
	});

	return res;
}

// Do not edit below this line
module.exports = removeFromArray;
