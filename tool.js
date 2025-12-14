function numericalMul(a, b) {
    var c = 0,
        d = a.toString(),
        e = b.toString();
    try {
        c += d.split(".")[1].length;
    } catch (f) { }
    try {
        c += e.split(".")[1].length;
    } catch (f) { }
    return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}

// 加法
function numericalAdd(a, b) {
    var c, d, e;
    try {
        c = a.toString().split(".")[1].length;
    } catch (f) {
        c = 0;
    }
    try {
        d = b.toString().split(".")[1].length;
    } catch (f) {
        d = 0;
    }
    return e = Math.pow(10, Math.max(c, d)), (numericalMul(a, e) + numericalMul(b, e)) / e;

}
// 减法
function numericalSub(a, b) {
    var c, d, e;
    try {
        c = a.toString().split(".")[1].length;
    } catch (f) {
        c = 0;
    }
    try {
        d = b.toString().split(".")[1].length;
    } catch (f) {
        d = 0;
    }
    return e = Math.pow(10, Math.max(c, d)), (numericalMul(a, e) - numericalMul(b, e)) / e;

}
// 获取当前年月
const getCurrentYearAndMonth = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month <= 10 ? '0' + month : month;
    return `${year}-${month}`
}

// 根据贷款的维护数据，抓取当前时间的贷款金额
const getCurrentLoanMoney = (moneyData) => {
    let currentTime = getCurrentYearAndMonth();
    let result = '';
    for (let item of moneyData) {
        for (let key in item) {
            if (key == currentTime) {
                result = item[currentTime];
            }
        }
    }
    return result;
}