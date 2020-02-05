/*
* init
* called when body loaded
*/
function init() {
    document.getElementById("test").innerHTML = "init say Hi !";
}

/* 
* test_button
* called by button onClick
*/

function test_button(){
    var my_test_div = document.getElementById("test");
    my_test_div.innerHTML = "Button clicked!";
    my_test_div.style.backgroundColor = "green"
    alert("Clicked");
}