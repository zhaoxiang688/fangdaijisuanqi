document.querySelector('.calc-button button').onclick = function () {
    let shangyeLoan = document.querySelector('.shangye input').value;
    let gongjijinLoan = document.querySelector('.gongjijin input').value;
    let gongjijintiqu = document.querySelector('.gongjijintiqu input').value;
    console.log('商业贷款：', shangyeLoan)
    console.log('公积金贷款：', gongjijinLoan)
    console.log('公积金提取：', gongjijintiqu)
    let totalLoan = numericalAdd(shangyeLoan, gongjijinLoan);
    let result = numericalSub(totalLoan, gongjijintiqu);
    console.log('总贷款是：', totalLoan);
    console.log('工资要补的贷款是：', result);
    document.querySelector('.result-number-resource').innerHTML = result + '元';
    document.querySelector('.result-number').innerHTML = Math.ceil(result) + '元';
}