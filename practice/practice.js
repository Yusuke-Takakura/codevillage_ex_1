const dragon = [
    { name: 'Goku', power: 30000, sex: 'men', haircolor: 'black' },
    { name: 'Bejita', power: 25000, sex: 'men', haircolor: 'gold ' },
    { name: 'Ararechan', power: 40000, sex: 'woman', haircolor: 'black' }
]

// const power = dragon[1].power;
// console.log(power);

function measure(chara) {
    let strong = [];
    for (let i = 0; i < 3; i++) {
        strong[0] = chara[i].power;
        if (strong[0] >= 40000) {
            const eva = '最強';
            console.log(eva);
        } else if (strong[0] >= 30000) {
            const eva = '中堅';
            console.log(eva);
        } else if (strong[0] >= 25000) {
            const eva = '最弱';
            console.log(eva);
        }
    }
}

console.log(measure(dragon));

//return evaにすると変数が返ってこないのはなぜか

let arr = [];
for (let i = 0; i < 5; i++) {
    arr[i] = i + 1
}
let len = arr.length;
console.log(len);
