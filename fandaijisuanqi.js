// 初始化页面
const initPage = () => {
    // 把时间初始化
    document.querySelector('.current-month').innerHTML = `（${getCurrentYearAndMonth()}）`;
    // 商业贷款
    document.querySelector('.shangye input').value = getCurrentLoanMoney(shangyedaikuanData);
    // 公积金贷款
    document.querySelector('.gongjijin input').value = getCurrentLoanMoney(gongjijindaikuanData);
    // 计算贷款
    calcLoan();
}
// 计算贷款
const calcLoan = () => {
    let shangyeLoan = document.querySelector('.shangye input').value;
    let gongjijinLoan = document.querySelector('.gongjijin input').value;
    let gongjijintiqu = document.querySelector('.gongjijintiqu input').value;
    if (shangyeLoan && gongjijinLoan && gongjijintiqu) {
        let totalLoan = numericalAdd(shangyeLoan, gongjijinLoan);
        let result = numericalSub(totalLoan, gongjijintiqu);
        document.querySelector('.result-number-resource').innerHTML = result + '元';
        document.querySelector('.result-number').innerHTML = Math.ceil(result) + '元';
    }
}

// 点击计算按钮
document.querySelector('.calc-button button').onclick = function () {
    calcLoan();
}
// 初始化页面
initPage();
