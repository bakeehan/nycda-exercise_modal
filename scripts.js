var modal = document.getElementById("modal");
var xButton = document.getElementById("closeModal");

setTimeout(function() {modal.style.display = "block";}, 3000);

xButton.addEventListener("click", function() {modal.style.display = "none";})