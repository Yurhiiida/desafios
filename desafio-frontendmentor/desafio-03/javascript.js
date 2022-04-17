function check(button_id) {

    for (var c = 1; c <= 5; c++) {
        var button_num = document.getElementById(`num${c}`)
        button_num.style.backgroundColor = "hsl(213, 19%, 18%)";
    }

    var button = document.getElementById(button_id);
    button.style.backgroundColor = "lightgrey";
}

/*function changeBackgroundDefault() {
    for (var c = 1; c <= 5; c++) {
    var button_num = document.getElementById(`num${c}`)
    button_num.style.backgroundColor = "hsl(213, 19%, 18%)";
    }
    
    var button_num_2 = document.getElementById("num2");
    var button_num_3 = document.getElementById("num3");
    var button_num_4 = document.getElementById("num4");
    var button_num_5 = document.getElementById("num5");*/

    /*button_num_1.style.backgroundColor = "hsl(213, 19%, 18%)";
    button_num_2.style.backgroundColor = "hsl(213, 19%, 18%)";
    button_num_3.style.backgroundColor = "hsl(213, 19%, 18%)";
    button_num_4.style.backgroundColor = "hsl(213, 19%, 18%)";
    button_num_5.style.backgroundColor = "hsl(213, 19%, 18%)";
}*/