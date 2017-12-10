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
        $("ul").append("<li><span><i class='material-icons'>delete_forever</i></span> " + newTodoText +"</li>");
    }
});

$(".toggleInput").click(function(){
    $("input[type='text']").fadeToggle();
});