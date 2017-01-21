function Person() {
  this.fullName = "Yaakov";
  this.fav = "Cookies";

  this.describe = function () {
    console.log('this is: ' , this);
    console.log(this.fullName + " likes " + this.fav);
  };
}


//1
var yaakov = new Person();
yaakov.describe();

//2
var describe = yaakov.describe;
describe();

//3
describe.call(yaakov);
