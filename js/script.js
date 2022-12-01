let foodItemContainer = document.getElementById("food-item-container");
let input = document.getElementById("input");
let inputBtn = document.getElementById("inputbtn");
let textArea = document.getElementById("msg-box");
let para = document.getElementById("para");

let EditContent=document.getElementById("edit");
let creatId = 0;

inputBtn.addEventListener("click", ()=> {
	if(input.value !== '' && textArea.value !== ''){
		foodItemContainer.innerHTML += `<div id="food-square-${creatId}" class="food-square">
											<div id="food-item-box" class="food-item-box">
												<div class="icons">
													<span id="edit">EDIT</span>
													<i class="icofont-close"></i>
												</div>
												<li class="food-item"><h4>${input.value}</h4></li>
												<p id="para">${textArea.value}</p>
											</div>
										</div>`;
		input.value = "";
		textArea.value = "";
		creatId++;
		let _delete = document.getElementsByClassName("icofont-close");
		for(let i = 0; i < _delete.length; i++){
			
			_delete[i].addEventListener("click", delt, false)
		}
	}
});

function delt(){
	this.parentNode.parentNode.parentNode.remove();
}