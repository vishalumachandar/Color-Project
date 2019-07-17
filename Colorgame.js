var numSquares = 6 ;
var  colors= generateRandomColors(numSquares);
var pickedColor= chooseColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn")
colorDisplay.textContent = pickedColor ;
easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	h1.style.backgroundColor = "steelblue";
	 numSquares =3 ;
	colors = generateRandomColors(numSquares);
	recall();
	for( var i=0 ; i< squares.length ; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = " none";
		}
	}
}); 
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	recall();	
	for( var i=0 ; i< squares.length ; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});
resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	recall();
	for (var i = 0 ; i < squares.length ; i++) {
		squares[i].style.backgroundColor= colors[i];	
}	
	messageDisplay.textContent = "";
	this.textContent = "NEW COLORS";
	h1.style.backgroundColor = " steelblue";
});
for( var i =0 ; i< squares.length ; i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor= this.style.backgroundColor;
		if(clickedColor == pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			resetButton.textContent = " Play Again"
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";

		}
	});
}
//color all squares if correct
function changeColors(color){
	for ( var i=0 ; i < squares.length ; i++){
		squares[i].style.backgroundColor= color;
	}
}

//choose color
function chooseColor()
{
	var random =	Math.floor(Math.random() * colors.length);
	return colors[random];
}
//generate the random array
function generateRandomColors(num){
	var arr = []
	for( var i = 0 ; i < num ; i++){
		arr.push(randomColors());
	}
	return arr;
}
// random rgb
function randomColors() {
	 var r = Math.floor(Math.random() * 256);
	 var g = Math.floor(Math.random() * 256);
	 var b = Math.floor(Math.random() * 256);
	 return "rgb(" + r + ", " + g + ", "+ b + ")";  
}
function recall(){
		pickedColor = chooseColor();
		colorDisplay.textContent = pickedColor;

}




