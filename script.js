function tickUp(){
    let counter = document.getElementById("counter");
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

function tickDown(){
    let counter = document.getElementById("counter");
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
}

function runForLoop(){
	let counter = document.getElementById("counter").innerHTML;
	let output = "";
	for (let i = 0; i <= counter; i++) {
		output += i + " ";
	}
	document.getElementById("forLoopResult").innerHTML = output;
}

function showOddNumbers(){
    let counter = document.getElementById("counter").innerHTML;
    let output = "";
    for (let i = 1; i <= counter; i += 2) {
        output += i + " ";
    }
    document.getElementById("oddNumberResult").innerHTML = output;
}

function addMultiplesToArray(){
    let counter = document.getElementById("counter").innerHTML;
    let multiples = [];
    for (let i = 1; i <= counter; i++) {
        if (i % 5 === 0) {
            multiples.push(i);
        }
    }
    console.log(multiples.reverse());
}

function printCarObject(){
    let carType = document.getElementById("carType").value;
    let carMPG = document.getElementById("carMPG").value;
    let carColor = document.getElementById("carColor").value;
    console.log({cType: carType, cMPG: carMPG, cColor: carColor});
}

function loadCar(carNumber){
    let carObject;
    switch(carNumber) {
        case 1:
            carObject = {cType: "MYSTERY MACHINE", cMPG: "67", cColor: "GREEN"};
            break;
        case 2:
            carObject = {cType: "SPOOKY CAR", cMPG: "28", cColor: "INVISIBLE"};
            break;
        case 3:
            carObject = {cType: "SPECIAL CAR", cMPG: "30", cColor: "PURPLE"};
            break;
    }
    document.getElementById("carType").value = carObject.cType;
    document.getElementById("carMPG").value = carObject.cMPG;
    document.getElementById("carColor").value = carObject.cColor;
}

function changeColor(colorNumber){
    let paragraph = document.getElementById("styleParagraph");
    switch(colorNumber) {
        case 1:
            paragraph.style.color = "red";
            break;
        case 2:
            paragraph.style.color = "green";
            break;
        case 3:
            paragraph.style.color = "blue";
            break;
    }
}

function setTo(value){
    document.getElementById("counter").innerHTML = value;
}
