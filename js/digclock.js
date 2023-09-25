const minuteDiffToTZ = {240: "ET", 300: "MT", 360: "MT", 420: "PT"}  // does not handle daylight savings
function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var ampm;  // "AM" or "PM"
    var minuteDiff = date.getTimezoneOffset();
    var timeZone;
    minute = (minute < 10 ? "0" : "") + minute
    second = (second < 10 ? "0" : "") + second
    timeZone = minuteDiffToTZ[minuteDiff] || "UTC" + (minuteDiff >= 0 ? "-" : "") + minuteDiff / 60;
    ampm = hour < 12 ? "AM" : "PM"
    hour = hour > 12 ? hour - 12 : hour
    var time = `${hour}:${minute}:${second} ${ampm} ${timeZone}`;
    document.getElementById("clock").innerText = time;
}
currentTime();
setInterval(currentTime, 1000);
