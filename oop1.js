function Animal(type,name,sound){
	this.type = type;
	this.name = name;
	this.sound = sound;
	this.say = function(){
		console.log(this.sound);
	};

	//const gubun = "동물";
	//let  gubun = "동물";
	var gubun = "동물";
	this.구분 = "동물";

}

const dog = new Animal('개','멍멍이','멍멍');
const cat = new Animal('고양이','야옹이','야옹');

dog.say();
cat.say();

console.log(dog.gudun); // this로 선언 안해서 출력 x
console.log(dog.구분); 
