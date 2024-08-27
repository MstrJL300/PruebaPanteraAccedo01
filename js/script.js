var iTxt_1 = document.getElementById("input_texto_1"),
    caja_1 = document.getElementById("caja_1"),
    caja_1_1 = document.getElementById("caja_1-1"),
    post_btn = document.getElementById("post_btn_1")
    // opcion_1 = document.getElementById("opcion_1")

iTxt_1.onclick = AddText
post_btn.onclick = PostComment
// opcion_1.onclick = AddImage

function AddText(){
    iTxt_1.value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
    caja_1.style.height = "125.2px"
    caja_1_1.style.visibility = "visible"
}

function PostComment(){
    var comentario = iTxt_1.value
}

// function AddImage(){
//     console.log("IMAGEN")
// }