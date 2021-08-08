var today = new Date();
var d = String(today.getDate()).padStart(2, '0');
var m = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var y = today.getFullYear();

today = d + '-' + m + '-' + y;
document.getElementById("dates").innerHTML = "21-09-2020/"+today;