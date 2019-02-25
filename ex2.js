
let arr = [
  { name: "thanh", age: 25 },
  { name: "test", age: 12 },
  { name: "dnh", age: 35 },
  { name: "thafds", age: 2 },
  { name: "tfdsah", age: 25 },
]

/**
 * Lấy giá trị của 1 keys của Object từ mảng Object với dk cho trước
 * @param {*} arrObj 
 * @param {*} key 
 * @param {*} conditon 
 */

const getValueObject = (arrObj, key, conditon) => {
  let result = null;
  for (let i = 0; i < arrObj.length; i++) {
    if (conditon(arrObj[i])) {
      result = arrObj[i];
    }
  }
  return result[key] ? result[key] : null;
}

const getObj = obj => obj.age === 12


console.log('===============>', getValueObject(arr, "name", getObj));

const getCurrValue = key => {
  return (arrObj, conditon) => {
    let result = null;
    for (let i = 0; i < arrObj.length; i++) {
      if (conditon(arrObj[i])) {
        result = arrObj[i];
      }
    }
    return result[key] ? result[key] : null;
  }
}

const getValueByName = getCurrValue('name');
const getValueByAge = getCurrValue('age');

console.log('===============>', getValueByAge(arr, getObj));