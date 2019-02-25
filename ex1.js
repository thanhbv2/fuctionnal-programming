/**
 * Bai toan filter list so trong 1 kg cho truoc
 * @param {*} num : so duong 
 * @param {*} condition : dk filter
 */


const pickNumber = (num, condition) => {
  let result = [];
  for (let i = 1; i < num; i++) {
    if (condition(i)) { result.push(i) }
  }
  return result;
}
// Chọn ra số lẻ
const getOddNumber = num => num % 2 != 0
// Chọn ra những số mà gấp 3 số đó rồi trừ đi 2 thu số chẵn
const getEvenNumber = num => ((num * 3) - 2) % 2 == 0

console.log('===============>', pickNumber(20, getOddNumber));
console.log('===============>', pickNumber(20, getEvenNumber));


// Curry function

const OtherPickNumber = num => {
  return condition => {
    let result = []
    for (let i = 1; i < num; i++) {
      if (condition(i)) result.push(i)
    }
    return result
  }
}

console.log('===============>', OtherPickNumber(20)(getOddNumber));
console.log('===============>', OtherPickNumber(20)(getEvenNumber));