// 함수 본문이 2줄 이상인 경우{} 로 감싸야 한다.
(iterator, needles) => {
    for(let o of needles){
	if(iterator.indexOf(o) === -1) return false;
    }
    return true;
}


//{}로 감싼 경우 값을 반환하려면 본문 줄 수에 상관없이 return keyword를 사용해야 한다.
const f = a ==> {return a};
//f(3) ->3;

const f2 = a => {a};
//f2(3) -> undefined;
