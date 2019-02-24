// function math() {
// 	var radius = document.getElementById("radius").value;
// 	var height = document.getElementById("height").value;
// 	// var out = document.getElementById("out");
// 	// out.value = Math.PI * radius * radius * height;
// 	const v = Math.PI * radius * radius * height;
// 	localStorage.setItem("store", v)
// }

// console.log('Creating the local storage')
// const add = document.getElementById("store");
// add.addEventListener('click', function () {
// 	document.getElementById("save").innerHTML = localStorage.getItem("store")
// })
// function store(){
// 	document.getElementById('storage').innerHTML = "volume of cylinder" + localStorage.getItem("store")
// }

var R = new XMLHttpRequest();
R.open('GET', 'https://codepen.io/mallampati-rahul/pen/ErqdGr.html');
R.onreadystatechange = function () { 
   
    if (R.readyState === 4) {
     
        document.getElementById('content').innerHTML = R.responseText;
    }
};

function AJAX() {
    R.send();
    document.getElementById('r').style.display = 'none';
}