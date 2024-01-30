//Array.prototype.sort
//배열을 정렬해서 새로운 배열을 밴환한다.
//이 때 비교함수를 callback으로 넣어서 정렬 결과를 조정할 수 있다.

const array = [100,6,89,34,0,1];
array.sort(); // (6) [0,1,100,34,6,89] // Unicode 포인트 순서에 따라 문자열처럼 처리
array.sort((a,b) => a -b); // (6) [0,1,6,34,89,100]    내림차순은 b-a로!!!
