$("li").click(function () {
    $(this).toggleClass("todoDone");
});

$("span").click(function (e) { 
    $(this).parent().fadeOut(1000, function() {
        $(this).remove();
    });
    e.stopPropagation();
});