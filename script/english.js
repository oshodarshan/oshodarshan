$(document).ready(function () {
    fetch('./oshoBooksEng.json')
    $("#kitabe").mirandajs(oshoBooksEng);
});


var collll = document.getElementsByClassName("collap-search");
var ff;

for (ff = 0; ff < collll.length; ff++) {
    collll[ff].addEventListener("click", function () {
        this.classList.toggle("active-search");
        var scon = this.nextElementSibling;
        if (scon.style.maxHeight) {
            scon.style.maxHeight = null;
        } else {
            scon.style.maxHeight = scon.scrollHeight + "px";
        }
    });
}