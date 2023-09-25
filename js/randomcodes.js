function generateCode() {
    var code = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (i = 1; i < 9; i++) {
        var num = Math.random() * chars.length;
        code += chars.charAt(num);
    }
    return code;
}

document.getElementById("codes").innerHTML = generateCode();

function disableButton() {
    document.getElementById("submit").disabled = true;
}

disableButton();
