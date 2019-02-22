function math() {
	var radius = document.getElementById("radius").value;
	var height = document.getElementById("height").value;
	var out = document.getElementById("out");
	out.value = Math.PI * radius * radius * height;
	const v = Math.PI * radius * radius * height;
	localStorage.setItem("store", v)
}

console.log('Creating the local storage')
const add = document.getElementById("store");
add.addEventListener('click', function () {
	document.getElementById("save").innerHTML = localStorage.getItem("store")
})