const dragon = [
    { name: 'Goku', power: 30000, sex: 'men', haircolor: 'black' },
    { name: 'Bejita', power: 25000, sex: 'men', haircolor: 'gold ' },
    { name: 'Ararechan', power: 40000, sex: 'woman', haircolor: 'black' }
]

// const power = dragon[1].power;
// console.log(power);

function measure(chara) {
    for (let i = 0; i < dragon.length; i++) {
        if (chara[i].power >= 40000) {
            const evaluate = '最強';
            console.log(evaluate);
        } else if (chara[i].power >= 30000) {
            const evaluate = '中堅';
            console.log(evaluate);
        } else if (chara[i].power >= 25000) {
            const evaluate = '最弱';
            console.log(evaluate);
        }
    }
}

console.log(measure(dragon));
measure(dragon);

//return evaにすると変数が返ってこないのはなぜか

let arr = [];
for (let i = 0; i < 5; i++) {
    arr[i] = i + 1
}
let len = arr.length;
console.log(len);

