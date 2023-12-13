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

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}