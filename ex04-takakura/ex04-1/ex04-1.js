function cointoss() {
    let num = Math.floor(Math.random() * 100);
    nums = num % 2;
    if (nums === 0) {
        console.log('表');
    } else {
        console.log('裏');
    }
}

for (let i = 0; i < 10; i++) {
    const coin = cointoss(i + 1);
    console.log(coin);
}