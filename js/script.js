
let foodItemContainer = document.getElementById("food-item-container");
let input = document.getElementById("input");
let inputBtn = document.getElementById("inputbtn");
let ubdatebtn = document.getElementById("ubdatebtn");
let textArea = document.getElementById("msg-box");
let para = document.getElementsByClassName("para");
let EditContent=document.getElementsByClassName("edit");
let _delete = document.getElementsByClassName("icofont-close");
let _edit = document.getElementsByClassName("edit");
let creatId = 0, getBxId = "";

//let editId = 0;

inputBtn.addEventListener("click", ()=> {
	if((input.value !== '') && (textArea.value !== '')){
		foodItemContainer.innerHTML += `<div class="food-square">
											<div class="food-item-box" id="food-square-${creatId}">
												<div class="icons">
													<span class="edit">EDIT</span>
													<i class="icofont-close"></i>
												</div>
												<h4 class="food-item">${input.value}</h4>
												<p class="para">${textArea.value}</p>
											</div>
										</div>`;
		clearInput();
		creatId++;
		
		for(let i = 0; i < _delete.length; i++){
			_delete[i].addEventListener("click", delt)
		}
		for(let x = 0; x < _edit.length; x++){
			_edit[x].addEventListener("click",editBtn);
		}	
	}
});
// ubdate button
ubdatebtn.addEventListener("click", updateBx);

function delt(){
	this.parentNode.parentNode.parentNode.remove();
}

// edit btn

let editBtn = function(e){
	let parentDM = e.target.parentNode.parentNode;
	let title = parentDM.getElementsByClassName("food-item")[0];
	let paraCont = parentDM.getElementsByClassName("para")[0];
	input.value = title.innerText;
	textArea.value = paraCont.innerText;
	getBxId = parentDM.id;
	inputBtn.classList.remove("show");
	ubdatebtn.classList.add("show");
	
}
function updateBx(){
	if(getBxId != ""){
		let bxId = document.getElementById(getBxId);
		let title = bxId.getElementsByClassName("food-item")[0];
		let paraCont = bxId.getElementsByClassName("para")[0];
		title.innerText = input.value;
		paraCont.innerText = textArea.value;
		clearInput();
		inputBtn.classList.add("show");
		ubdatebtn.classList.remove("show");
	}else{
		alert("There is no any update box");
	}	
}
function clearInput(){
	 input.value = "";
	 textArea.value = "";
}
