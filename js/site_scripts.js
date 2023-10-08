const partnersId = "partners"
const partnerClass = "partner"
const partnersFolder = `images/${partnersId}`
const partnerNames = ["bustour", "cabinrental", "campingadv", "collegetours", "rentalbike", "tourgroup"];
var partners = [];
for (var i=0; i<partnerNames.length; i++) {
    var imageName = `${partnerClass}-${partnerNames[i]}.png`
    var imageElem = `<img src='${partnersFolder}/${imageName}'>`;
    partners.push(`<div class=${partnerClass}> ${imageElem} </div>`);
}
document.getElementById(partnersId).innerHTML = partners.join('');
