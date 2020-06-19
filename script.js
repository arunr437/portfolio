$("a.nav-link, #moreButton ,.logo").on("click", function (e) {
    e.preventDefault();
    $(window).scrollTop($($(this).attr('href')).offset().top);
});

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

var backgroundImage;
$(".projectBackground").mouseover(function () {
    $(this).css("opacity", "0");
    $(this).next().css("display", "block");
});

$(".projectBackground").mouseout(function () {
    $(this).css("opacity", "1");
    $(this).next().css("display", "none");
});
