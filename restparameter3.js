// 함수 정의에는 하나의 ...만 존재할 수 있다.
function f(...a,...b,...c){
    //Wrong
}
// Uncaught SyntaxError : Rest parameter must be last formal parameter


//항상 맨 마지막에 사용한다.
function f(arg1,...rest,arg2){
    //Wrong
}
// Uncaught SyntaxError : Rest parameter must be last formal parameter
