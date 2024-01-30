// 배열 구조 분해할당
const foo  = ["one","two","three"];
const [one,two,three] = foo;
console.log(one,two,three);  // one two three


//선언에서 분리한 할당
let a,b;
[a,b] = [1,2];
console.log(a,b); //1,2

//할당값이 undefined일 경우
const [a=5,b=7,c=9] = [1,null];
console.log(a,b,c); //1 null 9
