// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("lista_modal_btn");
var btn = document.getElementById("opcion_1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var post_btn_2 = document.getElementById("post_btn_2")

//TEMP
// OpenModal()

// When the user clicks on the button, open the modal
btn.onclick = OpenModal

function OpenModal(){
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    CerrarModal()
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        CerrarModal()
    }
}

post_btn_2.onclick = function () {
    PostComment_2()
    CerrarModal()
}

function CerrarModal(){
    modal.style.display = "none";
}