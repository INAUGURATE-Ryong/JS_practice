class Food{
    constructor(name){
	this.name = name;
	this.brands = [];
    }
    addBrand(brand) {
	this.brands.push(brand) //배열에 값을 넣을 떄는 push를 씀
    }
    print(){
	console.log(`${this.name}을/를 파는 음식점들: `);
	console.log(this.brands.join(', ')); //배열을 출력할 때는 join을 씀
    }
}

const pizza = new Food("피자");
pizza.addBrand('피자헛');
pizza.addBrand('도미노 피자');


const chicken = new Food('치킨');
chicken.addBrand('굽네치킨');
chicken.addBrand('BBQ');


pizza.print();
chicken.print();
