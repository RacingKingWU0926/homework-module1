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

document.getElementById("codes").innerHTML = generateCode();

function disableButton(isDisabled) {
    document.getElementById("submit").disabled = isDisabled;
    console.log("hey!")

    if (isDisabled == true) {
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
    }
}

