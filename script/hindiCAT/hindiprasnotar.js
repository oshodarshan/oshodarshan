$(document).ready(function () {
    fetch('./oshoBooks.json')
    
    function filter(data , categ){
        var result =[];
        if(categ)
            result = data.filter(function (item) {return item.Category == categ});
        return result;
    }
    
    var data1 = filter(oshoBooks, 'Prasnotar')
    $("#kitabe").mirandajs(data1);
});

/* search by category collabisable bar */
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

$(function () {
    $('.gallery-image').magnificPopup({
        type: 'img',
        gallery: {
            enabled: true,
        }
    });
});