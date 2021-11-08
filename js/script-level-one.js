let playerAtac;
let computerAtac;
let playerHp = parseInt(document.getElementById('player-hp').innerText);
let computerHp= parseInt(document.getElementById('computer-hp').innerText);

let arrowNextLvl = document.getElementById('arrow-next-lvl');

let fight = document.getElementById('icons');

let plHit = 10+getRandomInt(5);
let comHit = 8+getRandomInt(2);

function promptName() {
    let value = prompt("Введіть ваше ім'я");
    while (value == ""){
        value = prompt("Ви не ввели ім'я. Спробуйте ще раз!");
    }
    while (value == " "){
        value = prompt("Ви не ввели ім'я. Спробуйте ще раз!");
    }
    while (value == "  "){
        value = prompt("Ви не ввели ім'я. Спробуйте ще раз!");
    }
    document.getElementById("playerName").innerHTML = value;
};

document.addEventListener("DOMContentLoaded", promptName);

function DeleteShaking(){
    document.getElementById("icons").classList.remove('shaking');
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function allAtack() {
	plHit = 10+getRandomInt(5);
	comHit = 8+getRandomInt(2);
	playerHp = playerHp - comHit;
	computerHp = computerHp - plHit;

	if (playerHp < 1){
		alert("You looooooose");
		window.location.replace("index.html")
	}
	if (computerHp < 1){
		alert("You Win!");
		window.location.replace("index.html")
		fight.removeEventListener("click", allMainFunction);
		computerHp = 0;
	} else {
		setTimeout(addEventListenerClick,2000);
	}
	if(computerHp < 10) {
		arrowNextLvl.style.display = "block";
	}
	document.getElementById('computer-hp').innerText = computerHp;
	document.getElementById('player-hp').innerText = playerHp;

	document.getElementById("player-atack-power").innerHTML = plHit;
	document.getElementById("computer-atack-power").innerHTML = comHit;
}

function addEventListenerClick(){
	fight.addEventListener('click', allMainFunction);
}

function allMainFunction(){
	fight.removeEventListener("click", allMainFunction);
	fight.classList.add('shaking');
	setTimeout(DeleteShaking, 1000);
	setTimeout(allAtack, 900);	

}

fight.addEventListener('click', allMainFunction);


