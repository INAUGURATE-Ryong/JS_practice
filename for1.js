for(var i =0; i<3;i++){
    setTimeout(function(){
	    console.log('setTimeout',i);
	    },i*200);
}
//setTimeout 3;
//setTimeout 3;
//setTimeout 3;

for(let i=0;i<3;i++){
    setTimeout(function(){
	    console.log('setTimeout',i);
	    },i*200);
}

//setTimeout 0;
//setTimeout 1;
//setTimeout 2;
