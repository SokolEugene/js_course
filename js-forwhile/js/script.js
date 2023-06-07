
let num = 0;
for (; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		if (size == 2) break;
	}
}
console.log(`Работа окончена, num = ${num}`);