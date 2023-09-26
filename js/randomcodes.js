const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
var isDisabled;

function generateCode() {
    let code = '';
    for (i = 1; i < 9; i++) {
        var num = Math.random() * chars.length;
        code += chars.charAt(num);
    }
    return code;
}

// generate code
const generated = generateCode();
document.getElementById("codes").innerHTML = generated;

// verify generated & entered code
function disableButton(isDisabled) {
    document.getElementById("submit").disabled = isDisabled;

    if (isDisabled == true) {
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
    }
}

// handle codebox input event
function evaluateInput() {
    var entered = document.getElementById("code-entered").value;
    if (entered.length == generated.length && entered === generated) {
        disableButton(false);
    } else {
        disableButton(true);
    }
}

// listen to codebox input event
var codebox = document.getElementById("code-entered")
codebox.addEventListener("input", evaluateInput);
