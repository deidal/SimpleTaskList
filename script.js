//define variables
var input = document.getElementById("userInput");
var button = document.getElementById("button");
var ul = document.querySelector("ul");


//tells you how many characters are in the input box
function inputLength() {
  return input.value.length;
}

//how to create a list element
function createListElement() {
  var li=document.createElement("li");
 //this is how you can style the list items; using CSS you can define the characteristics that your list item will have
  li.classList.add("listItem");
 //"whenever you click, follow the 'markListItem' function"
  li.addEventListener("click", markListItem);
 //from the video... this glues the new list element (the input value) to a list element
    li.appendChild(document.createTextNode(input.value));
 //this "glues" the new li element to the ul
    ul.appendChild(li); 
 //ensures that when you refresh, there wont be anything in the input box
    input.value="";
  
 //to line-through; a function that defines which objects to cross out. "to the 'li' elements, toggle with crossOut CSS characteristics". this goes back the a previous step, where you add a "click" event to the "li" element to enable the "markListItem" function
  function markListItem() {
    li.classList.toggle("crossOut")
  }


// create a delete button
	var btnDel = document.createElement("button");
// // style for the delete button
	btnDel.classList.add("deleteBtn");
	btnDel.appendChild(document.createTextNode("X"));
	li.appendChild(btnDel);
 //whenever you click, the "deleteListItem" will be enabled, which applies a "display: none" to that li element
	btnDel.addEventListener("click", deleteListItem);

	// adds "display: none" to the button
	function deleteListItem() {
		li.classList.add("delete");
	}
} 

//add list after click and after enter
function addListAfterClick() {
  if (input.value.length > 0){
    createListElement();
}
}

function addListAfterKeyPress() {
  if(input.value.length >0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);




//BEST NOT TO USE: in a real "to-do" list we wouldn't have pre-written list items. Maybe DO KEEP just to use as an example ..... cross out when clicked; only works for li elements in DOM HTML... cant get them to work for newly added objexts
// function liClick(){
//   this.classList.toggle("crossOut");
// }

// var list = document.getElementsByTagName("li");
// for(var i=0; i<list.length; i++){
//  list[i].addEventListener("click", liClick);
// }



//to make an element dissapear

// function allDone() {
//   this.classList.toggle("")
//   document.getElementById("element").style.display = "none;"
// }
// var list = document.getElementsByTagName("li");
// for(var i=0; i<list.length; i++){
//  list[i].addEventListener("dblclick", allDone);
// }






//cleaned up to reduce repetition

// button.addEventListener("click", function () {
//   if (input.value.length > 0){
//     var li=document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li); 
//     input.value="";}
// })



// function crossOut() {
  
// }

// input.addEventListener("keypress", function() {
//   if(input.value.length > 0 && event.keyCode === 13) {
//  var li=document.createElement("li");              li.appendChild(document.createTextNode(input.value));
//  ul.appendChild(li); 
//  input.value=""; 
//   }
  
// }) 



// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// function inputLength() {
// 	return input.value.length;
// }

// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }

// function addListAfterKeypress(event) {
// 	if (inputLength() > 0 && event.keyCode === 13) {
// 		createListElement();
// 	}
// }

// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);