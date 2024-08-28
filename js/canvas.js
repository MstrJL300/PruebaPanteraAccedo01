let canvas_1 = document.getElementById("canvas_1"),
    context = canvas_1.getContext('2d')

Image_Set()

function Image_Set(){

    var image = new Image()

    // image.width = 10
    // image.height = 339.0386869871043

    // image.width = 100
    // image.height = 100

    image.onload = function(){

        var img_w = image.width,
            img_h = image.height,
            canvas_w = canvas_1.width,
            canvas_h = canvas_1.height,
            s1 = 0, s2 = 0

        console.log("WIDTH " + img_w);  console.log("HEIGHT " + img_h)
        console.log("C WIDTH " + canvas_w); console.log("C HEIGHT " + canvas_h)
        
        if(img_w > canvas_w){
            console.log("opc1")
            s1 = canvas_w/img_w
        }
        else{
            console.log("opc2")
            s1 = img_w/canvas_w
        }

        if(img_h > canvas_h){
            console.log("opc1")
            s2 = canvas_h/img_h
        } else {
            console.log("opc2")
            s2 = img_h/canvas_h
        }

        context.scale(s1, s2)
        context.drawImage(image, 0, 0);

        // canvas_1.width = 200
    }

    //Imagen seleccionada
    image.src = "recursos/imagen-selecc-1.png"
}