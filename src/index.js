module.exports = function toReadable (number) {

    let SingleNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let DoubleNumber = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let DozensNumber = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    //трехзначные числа-максимум
    //разложим число на разряды   126
    let numberValue = number;
    let firstRank = numberValue % 10;         
    numberValue = (numberValue - firstRank ) / 10       
    let secondRank  = numberValue % 10;       
    numberValue = (numberValue - secondRank ) / 10          
    let thirdRank  = numberValue % 10;       
    numberValue = (numberValue - thirdRank ) / 10

    let FirstTest;
    let SecondTest;
    let ThirdTest; 
    
    if (thirdRank != 0) {
        ThirdTest = `${SingleNumber[thirdRank]} hundred`;
    } else {
        ThirdTest = '';
    }

    if (secondRank == 1) {
        SecondTest = DoubleNumber[firstRank];//тк 10-19 пишется в одно слово, мы сравниваем по единицам(1 ранг)
    }
    else if (secondRank == 0){
        SecondTest = '';
    } 
    else if (secondRank > 1 ) {
        SecondTest = DozensNumber[secondRank-2];//тк 10 храниться с 10-19, индекс массива начинается с 0 
    }

    if ((firstRank == 0 && (thirdRank != 0 || secondRank != 0) || secondRank == 1)){
        FirstTest = '';
    }
    else  {
        FirstTest = SingleNumber[firstRank];
    } 

    let result = [ThirdTest, SecondTest, FirstTest];
    return result.filter(num => num !== '').join(' ');//если число непустое, то соединяем с пробелами
}
