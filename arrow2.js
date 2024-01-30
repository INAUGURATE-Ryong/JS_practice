//보통은 익명 함수로 사용하거나, 함수 표현식처럼 변수에 할당하여 사용할 수 있다.
const sum = (a,b) => a+b;

//함수 인자가 없거나 2개 이상일 경우 그리고 가변 인자를 사용할 경우 괄호가 필요하다.

() => console.log('empty call');

(a,b,c) => a+b+c;
(...rest) => rest.reduce((a,b) => a+b,0); //addAll
