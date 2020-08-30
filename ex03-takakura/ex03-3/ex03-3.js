const array = [1, 2, 3]

array.splice(0, 1);
console.log(array);

array.push(5);
console.log(array);

//インデックス番号は中身の操作に伴う
array.splice(1, 2);
console.log(array);

// console.log(array * 50);
array[0] = 100;
console.log(array);