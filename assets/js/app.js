var img = document.getElementsByClassName("animal");
var select = document.getElementById("seleccionar");


select.onchange = function() {
    expression = select.value;
    switch (expression) {

        case "sepia":
            classes("sepia", "blanco-negro", "invertir-colores");
            break;

        case "invertir-colores":
            classes("invertir-colores", "blanco-negro", "sepia");
            break;


        case "blanco-negro":
            classes("blanco-negro", "invertir-colores", "sepia");
            break;
        default:
            for (var i = 0; i < img.length; i++) {
                img[i].classList.remove("blanco-negro");
                img[i].classList.remove("invertir-colores");
                img[i].classList.remove("sepia");
            }

    }
}
//+++++++++++++++++++++++++++++++++++++++++++
function classes(add, delet, delet2) {
    for (var i = 0; i < img.length; i++) {
        img[i].classList.add(add);
        img[i].classList.remove(delet);
        img[i].classList.remove(delet2);
    }
}
