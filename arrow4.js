//매개변수 목록 내 기본값, 구조 분해 할당도 지원

var f = ([a,b] = [1,2],{x: c} = {x:a+b}) => a+b+c;
f(); // 6
