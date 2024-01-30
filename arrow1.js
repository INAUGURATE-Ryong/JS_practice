//함수 본문이 한줄인 경우 return과 중괄호를 생략할 수 있다.
var func = x => x * x; //consise 바디
var func = (x,y) => {return x+y;}; // block 바디

//객체 리터럴을 반환할 때는 괄호를 싸 주세요.

//no
var func = () => {foo:1};
//func() 호출은 undefined를 반환!

//yes
var func = () => ( {foo:1});

//줄바꿈은 안됩니다.
var func = ()
=> 1;
//SyntaxError : expected expression, got '=>'
