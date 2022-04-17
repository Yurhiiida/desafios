function check(button_id) {

//    imprimir um valor que uma função retornou 
//     var valor = returnValor(10);
//     console.log(valor);

    //também funciona  
    // Array.from(document.querySelectorAll('button')).map(function(button) {
    //     button.style.backgroundColor = "hsl(213, 19%, 18%)";
    // });

    changeBackgroundDefault();

    var button = document.getElementById(button_id);
    button.style.backgroundColor = "lightgrey";
}

function returnValor(valor) {
    return valor;
}

function changeBackgroundDefault() {
    var button_num_1 = document.getElementById("num1");
    var button_num_2 = document.getElementById("num2");
    var button_num_3 = document.getElementById("num3");
    var button_num_4 = document.getElementById("num4");
    var button_num_5 = document.getElementById("num5");

    button_num_1.style.backgroundColor = "hsl(213, 19%, 18%)";
    button_num_2.style.backgroundColor = "hsl(213, 19%, 18%)";
    button_num_3.style.backgroundColor = "hsl(213, 19%, 18%)";
    button_num_4.style.backgroundColor = "hsl(213, 19%, 18%)";
    button_num_5.style.backgroundColor = "hsl(213, 19%, 18%)";
}