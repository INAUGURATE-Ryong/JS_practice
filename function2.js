//함수를 인자로 받기
var arr1 = [1,2,3];
var arr2 = arr1.map(function(item) {
	return item*2;
});
arr2 ; // (3) [2,4,6]

//함수가 함수를 반환
function add(a,b){
    return function(c) {
	return a+b+c;
    }
}
add(2,3)(10); // 15
