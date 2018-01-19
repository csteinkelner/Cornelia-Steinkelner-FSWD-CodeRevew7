// alert("I load!")

class Person {

	constructor(name, surname, favoritePerformers, age, myPhoto,like, gender) {
		this.name = name;
		this.surname = surname;
		this.favoritePerformers = favoritePerformers;
		this.age = age;
		this.myPhoto = myPhoto;
		this.like = like;
		this.gender = gender;
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

var allPersons = [
	new Person("John", "Doe", ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
	25,"img/boy1.jpg",0,"male"),
	new Person("Jane", "Walter", ["Justin Bieber", "Katy Perry", "Rihanna"],
	24,"img/girl1.jpg",0,"female"),
	new Person("Christine", "Mayer", ["Shakira", "Imagine Dragons", "Green day"],
	26,"img/girl2.jpg",0,"female"),
	new Person("Tomas", "Stein", ["Pink", "Mariah Carey", "Rita Ora"],
	27,"img/boy2.jpg",0,"male"),
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

    if (allPersons[i].gender === "male") {
    place2.innerHTML += allPersons[i].render();
    }
  }
}

function showOnlyFemales() {
  let place2 = document.getElementById("row");
  for (let i = 0; i < allPersons.length; i++) {

    if (allPersons[i].gender === "female") {
    place2.innerHTML += allPersons[i].render();
    }
  }
}
