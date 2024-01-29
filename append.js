function append(value, array = [] ){
        array.push(value)
        return array;
}
console.log( append(1,append(2)) );
console.log( append(1, append(2, [10,9,8] )) );
