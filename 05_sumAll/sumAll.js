const sumAll = function(num1, num2) {
	if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
		return "ERROR"
	}

	if (num1 < 0 || num2 < 0) {
		return "ERROR"
	}

	let start = num1 > num2 ? num2 : num1;
	let end = num1 > num2 ? num1 : num2;
	console.log(start, end);

	let sum = 0;
	for (let i = start; i <= end; i++) {
		sum += i;
	}

	return sum;
};

// console.log(sumAll(1, 2));

// Do not edit below this line
module.exports = sumAll;
