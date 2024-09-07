document.getElementById("fname").onblur = function(){
	return this.value = this.value.toUpperCase();
}