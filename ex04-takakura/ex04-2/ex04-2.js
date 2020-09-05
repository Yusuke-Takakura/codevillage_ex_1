function scoring(score) {
    if (score >= 90) {
        eva = '秀';
    } else if (score >= 75) {
        eva = '優';
    } else if (score >= 60) {
        eva = '良';
    } else if (score >= 30) {
        eva = '可';
    } else {
        eva = '不可';
    }
    return eva;
}
console.log(scoring(100));