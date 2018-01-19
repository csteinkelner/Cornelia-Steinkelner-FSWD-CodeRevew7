// alert("I load!")

class Person {

	constructor(name, surname, age, myPhoto, relation,like, gender) {
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.myPhoto = myPhoto;
		this.like = like;
		this.gender = gender;
		this.relation = relation;
	}

	render() {
		let content = `
		<div class='col-lg-3 col-md-6 col-xs-12 px-5 col'>
			<div class='row'>
				<div class='col-6'>
					<img src='${this.myPhoto}' class='pic'>
				</div>
				<div class='col-6 text'> 
					Name: <b> ${this.name}</b><br>
					Surname: <b> ${this.surname}</b><br>
					Age: <b> ${this.age} </b>
				</div>
			</div>
			<div class='row'>
				<div class='col-4 col-md-offset-4 col-lg-offset-4 col-sm-offset-4 col-offset-3 like'>
					<button type="submit" class='btn'>Like</button>
					${this.likes}
					<img src='img/like.png' class='heart'>
				</div>
			</div>
		</div>`;
		return content;
	}
}

var Gender = ["Male","Female","Not specified"]

var allPersons = [
	new Person("John", "Doe", 25,"img/P05.jpg", false, 0,Gender[0]),
	new Person("Jane", "Walter", 24,"img/P01.jpg", false, 0,Gender[1]),
	new Person("Christine", "Mayer", 26,"img/P03.jpg", false, 0,Gender[2]),
	new Person("Thomas", "Stein", 27,"img/P02.jpg", false, 0,Gender[0]),
	new Person("Sabine", "Holm", 23, "img/P04.jpg", false, 0, Gender[1]),
	new Person("Tom", "Sparow", 20, "img/P06.jpg", true, 0, Gender[0]),
	new Person("Betty", "Strudel", 25, "img/P07.jpg", false, 0, Gender[1]),
	new Person("Stella", "Blum", 18, "img/P09.jpg", false,0,Gender[1]),
	new Person("Tanja", "Gries", 27, "img/P10.jpg", false,0,Gender[1]),
	new Person("Marino", "Gonzales", 40, "img/P11.jpg", false,0,Gender[0]),
	new Person("Stefan", "Raster", 30, "img/P12.jpg", false,0,Gender[0]),
	new Person("Ronald", "Kamora", 28, "img/P13.jpg", false,0,Gender[0]),
	new Person("Lysia", "Ruff", 5, "img/P14.jpg", false,0,Gender[2]),
	new Person("John", "Gray", 35, "img/P15.jpg", true,0,Gender[0]),
	new Person("Josiah", "Fuchs", 45, "img/P16.jpg", false,0,Gender[0]),
	new Person("Farid", "Kle", 60, "img/P17.jpg", false,0,Gender[0]),
	new Person("Sean", "Migod", 42, "img/P18.jpg", false,0,Gender[0]),
	new Person("Sebastian", "Mark", 25, "img/P19.jpg", false,0,Gender[0]),
	new Person("Magrid", "Flabonka", 71,"img/P20.jpg", false,0,Gender[1]),
	new Person("Lucy", "Meh", 7,"img/P21.jpg", false,0,Gender[1]),	
];


// __________________________likes__________________________________
// $(".btn").click(function(){
// 	var L = allPersons[i].likes;
// 	L ++;
// 	this.likes = L;
// })

// for(let i = 0; i < allPersons.length; i++){
// 	$(".btn").click(function(){
// 		var L = allPersons[i].likes;
// 		L ++;
// 		this.likes = L;
// 	})
// }
$(document).ready( function() {
	var buttons = $('.btn');

	for(let i = 0; i < buttons.length; ++i ) {
		buttons.eq(i).click(function() {
				this.likes++
			}
		);
	}
});
//______________sort___________________________________________

function showAll() {
  let place = document.getElementById("row");
  for (let i = 0; i < allPersons.length; i++) {
	place.innerHTML += allPersons[i].render();
};
}

function showOnlyMales() {
  let place2 = document.getElementById("row");
  for (let i = 0; i < allPersons.length; i++) {

    if (allPersons[i].gender === Gender[0]) {
    place2.innerHTML += allPersons[i].render();
    }
  }
}

function showOnlyFemales() {
  let place2 = document.getElementById("row");
  for (let i = 0; i < allPersons.length; i++) {

    if (allPersons[i].gender === Gender[1]) {
    place2.innerHTML += allPersons[i].render();
    }
  }
}
