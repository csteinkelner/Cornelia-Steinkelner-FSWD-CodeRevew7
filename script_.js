// alert("I load!")

class Person {

	constructor(name, surname, favoritePerformers, age, myPhoto,like) {
		this.name = name;
		this.surname = surname;
		this.favoritePerformers = favoritePerformers;
		this.age = age;
		this.myPhoto = myPhoto;
		this.like = like;
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
	25,"img/boy1.jpg",0),
	new Person("Jane", "Walter", ["Justin Bieber", "Katy Perry", "Rihanna"],
	24,"img/girl1.jpg",0),
	new Person("Christine", "Mayer", ["Shakira", "Imagine Dragons", "Green day"],
	26,"img/girl2.jpg",0),
	new Person("Tomas", "Stein", ["Pink", "Mariah Carey", "Rita Ora"],
	27,"img/boy2.jpg",0),
];

for (let i = 0; i < allPersons.length; i++) {
	document.getElementById("row").innerHTML += allPersons[i].render();
};

$(".btn").click(function(){
	for(let i = 0; i < allPersons.length; i++){

	}
})
for(let i = 0; i < allPersons.length; i++){
	$(".btn").on("click", function(){
		var L = allPersons[i].likes;
		L ++;
		// document.getElementById("like1").innerHTML = L;
	})
}
