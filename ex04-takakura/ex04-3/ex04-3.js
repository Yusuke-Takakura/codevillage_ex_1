const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65]

function scoring(score) {
    if (score >= 90) {
        const eva = '秀'
        return eva
        // console.log('秀')
    } else if (score >= 75) {
        const eva = '悠'
        return eva
        // console.log('優')
    } else if (score >= 60) {
        const eva = '中'
        return eva
        // console.log('良')
    } else if (score >= 30) {
        const eva = 't'
        return eva
        // console.log('可')
    } else {
        const eva = 'h'
        return eva
        // console.log('不可')
    }
}

scores.forEach(score => {
    console.log(scoring(score));
});