//Array.prototype.map
//배열을 순회하며  callback의 결과값을 새로운 배열로 반환

const array = [1,2,3,4,5];
const r = array.map(n => n*n);
console.log(r);
//(5) [1,4,8,16,25]
