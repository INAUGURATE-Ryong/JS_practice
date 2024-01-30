//Array.prototype.filter
//배열을 순회하며 callback 결과값이 true인 원소만 담은 새로운 배열을 반환

const array = [1,2,3,4,5];
const r = array.filter(n => n%2);
console.log(r);
//(3) [1,3,5]
