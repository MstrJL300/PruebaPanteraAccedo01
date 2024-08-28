var iTxt_1 = document.getElementById("input_texto_1"),
    iTxt_2 = document.getElementById("input_texto_2"),
    caja_1 = document.getElementById("caja_1"),
    caja_1_1 = document.getElementById("caja_1-1"),
    post_btn = document.getElementById("post_btn_1"),
    table_2 = document.getElementById("table_2")
    // opcion_1 = document.getElementById("opcion_1")

iTxt_1.onclick = AddText
post_btn.onclick = PostComment
// opcion_1.onclick = AddImage

function AddText(){
    iTxt_1.value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
    caja_1.style.height = "125.2px"
    caja_1_1.style.visibility = "visible"
}

function PostComment(){ //<img src=\"recursos/person_icon.png\" alt=\"person_icon\" class=\"person_icon\">
    var comentario = iTxt_1.value, row = document.createElement("tr"), 
        cell_1 = document.createElement("td"), cell_2 = document.createElement("td"),
        cell_content_1 = document.createElement("img"),
        cell_content_2 = document.createTextNode(comentario)
    
    // console.log("COMENTARIO: " + comentario)

    cell_content_1.src = "recursos/person_icon.png";    cell_content_1.alt = "person_icon"
    cell_content_1.className = "person_icon"

    cell_1.appendChild(cell_content_1);    cell_2.appendChild(cell_content_2)

    row.appendChild(cell_1);    row.appendChild(cell_2)

    table_2.appendChild(row)
}

function PostComment_2(){ //<img src=\"recursos/person_icon.png\" alt=\"person_icon\" class=\"person_icon\">
    var comentario = iTxt_2.value, row = document.createElement("tr"), 
        cell_1 = document.createElement("td"), cell_2 = document.createElement("td"),
        cell_content_1 = document.createElement("img"),
        cell_content_2 = document.createTextNode(comentario),
        cell_content_3 = document.createElement("img")
    
    // console.log("COMENTARIO: " + comentario)

    cell_content_1.src = "recursos/person_icon.png";    cell_content_1.alt = "person_icon"
    cell_content_1.className = "person_icon";   cell_content_3.src = "recursos/imagen-selecc-1.png"
    cell_content_3.className = "img_selecc"

    cell_1.appendChild(cell_content_1);    cell_2.appendChild(cell_content_3)
    cell_2.appendChild(cell_content_2)

    row.appendChild(cell_1);    row.appendChild(cell_2)

    table_2.appendChild(row)
}
