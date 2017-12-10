$("ul").on("click", "li", function () {
    $(this).toggleClass("todoDone");
});

$("ul").on("click", "span", function (e) { 
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if (e.which === 13) {
        var newTodoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>x</span> " + newTodoText +"</li>");
    }
});