/**********************************************************************************************************/
/*                                     Fuctions for Cyberpunk web                                         */
/*                                        Author: Manuel Alarcón                                          */
/*                                             version: 1.0                                               */
/*                                   Comments: final project 2023-24                                      */
/**********************************************************************************************************/

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
}

function sound(element){
    document.getElementById(element).play();
}

function silence(element){
    document.getElementById(element).pause();
}

/**************************Codico del modal de footer**************************/

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}