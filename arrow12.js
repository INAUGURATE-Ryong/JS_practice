//Array.prototype.some
//배열을 순회하며 callback의 결과값에 하나라도 true가 있을 경우 true, 아닐 경우 false를 반환

const array = [1,2,3,4,5];
console.log(array.some( n => n >100)) //false
console.log(array.some(n => n > 4> )) //true
