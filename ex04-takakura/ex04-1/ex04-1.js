function cointoss() {
    for (let i = 0; i < 10; i++) {
        let num = Math.random();
        const nums = num % 2;
        if (nums == 0) {
            console.log('表');
        } else {
            console.log('裏');
        }
    }
}

console.log(cointoss());