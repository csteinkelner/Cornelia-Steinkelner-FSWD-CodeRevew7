//alert("I load!")

class Person {

	constructor(name, surname, favoritePerformers, age, myPhoto) {
		this.name = name;
		this.surname = surname;
		this.favoritePerformers = favoritePerformers;
		this.age = age;
		this.myPhoto = myPhoto;
	}

	text(elId) {
		var place = document.getElementById(elId);
		place.innerHTML += "<img src='" + this.myPhoto + "' class='pic'>";
		place.innerHTML += "<div class='text'> Name: <b>" + this.name + "</b><br>Surname: <b>" + this.surname + 
		"</b><br>Age: <b>" + this.age + "</b></div";
	}
}


var boy1 = new Person("John", "Doe", ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	25,"CR5/boy1.jpg");
boy1.text("p1");

var girl1 = new Person("Jane", "Walter", ["Justin Bieber", "Katy Perry", "Rihanna"],
	24,"CR5/girl1.jpg");
girl1.text("p2");

var girl2 = new Person("Christine", "Mayer", ["Shakira", "Imagine Dragons", "Green day"],
	26,"CR5/girl2.jpg");
girl2.text("p3");

var boy2 = new Person("Tomas", "Stein", ["Pink", "Mariah Carey", "Rita Ora"],
	27,"CR5/boy2.jpg");
boy2.text("p4");



// var Persons = [
// 	{
// 		name: 'John',
// 		surname: 'Doe',
// 		favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
// 		age: 25,
// 		myPhoto: "CR5/boy1.jpg",	
// 		likes: 0,
// 	},
// 	{
// 		name: 'Jane',
// 		surname: 'Walter',
// 		favoritePerformers: ["Justin Bieber", "Katy Perry", "Rihanna"],
// 		age: 24,
// 		myPhoto: "CR5/girl1.jpg",	
// 		likes: 0  
// 	},
// 	{
// 		name: 'Christine',
// 		surname: 'Mayer',
// 		favoritePerformers: ["Shakira", "Imagine Dragons", "Green day"],
// 		age: 26,
// 		myPhoto: "CR5/girl2.jpg",	
// 		likes: 0  
// 	},
// 	{
// 		name: 'Tomas',
// 		surname: 'Stein',
// 		favoritePerformers: ["Pink", "Mariah Carey", "Rita Ora"],
// 		age: 27,
// 		myPhoto: "CR5/boy2.jpg",	
// 		likes: 0  
// 	}
// 	];


// document.getElementById("p1").innerHTML += "<img src='" + Persons[0].myPhoto + "' class='pic'>";
// document.getElementById("p1").innerHTML += "<div class='text'> Name: <b>" + Persons[0].name + "</b><br>Surname: <b>" + Persons[0].surname + 
// 		"</b><br>Age: <b>" + Persons[0].age + "</b></div";

// document.getElementById("p2").innerHTML += "<img src='" + Persons[1].myPhoto + "' class='pic'>";
// document.getElementById("p2").innerHTML += "<div class='text'> Name: <b>" + Persons[1].name + "</b><br>Surname: <b>" + Persons[1].surname + 
// 		"</b><br>Age: <b>" + Persons[1].age + "</b></div";

// document.getElementById("p3").innerHTML += "<img src='" + Persons[2].myPhoto + "' class='pic'>";
// document.getElementById("p3").innerHTML += "<div class='text'> Name: <b>" + Persons[2].name + "</b><br>Surname: <b>" + Persons[2].surname + 
// 		"</b><br>Age: <b>" + Persons[2].age + "</b></div";

// document.getElementById("p4").innerHTML += "<img src='" + Persons[3].myPhoto + "' class='pic'>";
// document.getElementById("p4").innerHTML += "<div class='text'> Name: <b>" + Persons[3].name + "</b><br>Surname: <b>" + Persons[3].surname + 
// 		"</b><br>Age: <b>" + Persons[3].age + "</b></div";

// $(document).ready (function(){

// 	$("button").on("click", function(){
// 		var L = Persons[0].likes;
// 		L ++;
// 		document.getElementById("like1").innerHTML = L;
// 	})

// })

//__________________________________Likes_____________________________________
var L1 = 0;
var display1 = document.getElementById("like1");
  
	$("#b1").on("click", function(){
	    L1++;
	    display1.innerHTML = L1;	
	})

var L2 = 0;
var display2 = document.getElementById("like2");

	$("#b2").on("click", function(){
	    L2++;
	    display2.innerHTML = L2;	
	})

var L3 = 0;
var display3 = document.getElementById("like3");

	$("#b3").on("click", function(){
	    L3++;
	    display3.innerHTML = L3;	
	})

var L4 = 0;
var display4 = document.getElementById("like4");

	$("#b4").on("click", function(){
	    L4++;
	    display4.innerHTML = L4;	
	})
