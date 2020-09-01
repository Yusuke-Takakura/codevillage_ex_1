function scoring(score) {
    if (score >= 90) {
        console.log('秀')
    } else if (score >= 75) {
        console.log('優')
    } else if (score >= 60) {
        console.log('良')
    } else if (score >= 30) {
        console.log('可')
    } else {
        console.log('不可')
    }
}
console.log(scoring(100));