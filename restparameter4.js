// 항상 배열로 반환됩니다.
function f(a,b,...rest){
    console.log(a,b,rest);
}
f(1,2,3); // 1,2,[3]
