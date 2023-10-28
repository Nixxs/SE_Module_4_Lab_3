function reset(){
    document.getElementById("input-num-one").value = "";
    document.getElementById("input-num-two").value = "";
    document.getElementById("result-output").value = "";
}

function calculate() {
    let result;
    let num_1 = Number(document.getElementById("input-num-one").value);
    let num_2 = Number(document.getElementById("input-num-two").value);
    let operator = document.getElementById("operator-input").value;

    switch (operator) {
        case "add":
            result = num_1 + num_2;
            break;
        case "subtract":
            result = num_1 - num_2;
            break;
        case "multiply":
            result = num_1 * num_2;
            break;
        case "divide":
            result = num_1 / num_2;
            break;
        default:
            result = "Invalid number"
    }

    document.getElementById("result-output").value = result;
}
