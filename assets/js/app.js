function formIncomplete() {
	var viewForm=document.getElementsByClassName("view-form")[0];
	viewForm.addEventListener("click", formComplete);

	function formComplete(){
	var viewComplete = document.getElementsByClassName('display-n');
		for(var i = 0 ; i < viewComplete.length ; i++){
		viewComplete[i].style.display="block";
    }
  }
}
formIncomplete();